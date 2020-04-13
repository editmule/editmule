import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactGA from 'react-ga';
import moment from 'moment';

import config from 'config';
import './Blog.css';

const contentful = require('contentful');

export default function Posts(props: any) {
  const { num } = useParams();
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const pageNum = num ? parseInt(num) : 0;

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);

    function getPosts() {
      const client = contentful.createClient({
        space: config.contentful.SPACE_ID,
        accessToken: config.contentful.ACCESS_TOKEN
      });

      const pn = num ? parseInt(num) : 0;

      return client.getEntries({
        skip: pn === 0 ? 0 : (config.BLOG_POSTS_PER_PAGE * (pn - 1)),
        limit: config.BLOG_POSTS_PER_PAGE,
        order: '-sys.createdAt'
      });
    }

    async function onLoad() {
      setIsLoading(true);
      try {
        const entries = await getPosts();
        setPosts(entries.items);
        setTotalPosts(entries.total);
      } catch (e) {
        alert(e);
      }
      setIsLoading(false);
    }

    onLoad();
  }, [num]);

  function renderPosts() {
    return (posts).map((post: any, index: number) => (
      <div key={post.fields.slug} className="col-md-4 col-12">
        <div className="feature feature-1">
          <img alt={post.fields.title} src={post.fields.featuredImage.fields.file.url} />
          <div className="feature__body boxed boxed--border">
            <p className="type--fade">{moment(post.fields.date).format('MMMM Do YYYY')}</p>
            <h5>{post.fields.title}</h5>
            <p>
              {post.fields.description}
            </p>
            <Link key={post.fields.slug} to={`/blog/post/` + post.fields.slug}>Read more</Link>
          </div>
        </div>
      </div>
    ));
  }

  function renderPagination() {
    let pagination = [];
    let page;
    for (page = 1; page < (totalPosts / config.BLOG_POSTS_PER_PAGE) + 1; page++) {
      if (pageNum === page || (pageNum === 0 && page === 1)) {
        pagination.push(
          <li className="pagination__current" key={page}>
            {page}
          </li>);
      } else {
        pagination.push(
          <li key={page}>
            <Link to={`/blog/pages/` + (page)}>{page}</Link>
          </li>);
      }
    }
    return pagination;
  }

  return (
    <>
      <section className="space--xs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Blog</h1>
              <hr />
            </div>
          </div>
        </div>
      </section>
      {isLoading ?
        <section className="height-70 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </section>
        :
        <section className="space--sm">
          <div className="container">
            <div className="row">
              {renderPosts()}
            </div>
          </div>
          <div className="pagination justify-content-center">
            <ol>
              {renderPagination()}
            </ol>
          </div>
        </section>
      }
    </>
  );
}
