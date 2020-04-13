import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactGA from 'react-ga';
import MD from 'react-markdown';
import moment from 'moment';

import config from 'config';
import './Blog.css';

const contentful = require('contentful');

export default function SinglePost(props: any) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);

    function getSinglePost() {
      const client = contentful.createClient({
        space: config.contentful.SPACE_ID,
        accessToken: config.contentful.ACCESS_TOKEN
      });

      return client.getEntries({
        'fields.slug': id,
        content_type: 'title'
      });
    }

    async function onLoad() {
      setIsLoading(true);
      try {
        const response = await getSinglePost();
        setPost(response.items[0].fields);
      } catch (e) {
        alert(e);
      }
      setIsLoading(false);
    }

    onLoad();
  }, [id]);

  function renderContent(post:any) {
    return (
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <article>
                <div className="article__title text-center">
                  <h2>{post.title || ""}</h2>
                  <span>{moment(post.date).format('MMMM Do YYYY') || ""}</span>
                </div>
                <div className="article__body">
                  <MD source={post.body} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="main-container">
      {isLoading ?
        <section className="height-30 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </section>
        : renderContent(post)
      }
    </div>
  );
}
