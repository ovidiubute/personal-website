import React from 'react';
import { Link } from "gatsby"

function getRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) return 'today';
  if (diffInDays === 1) return 'yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

export default ({ posts }) => {
  if (!posts.length) return null;

  return (
    <section className="homepage-section latest-posts">
      <h2 className="section-header">Latest from the blog</h2>
      <div className="post-list">
        {posts.map(({ node }) => {
          const { slug, title, date, description } = node.frontmatter;
          return (
            <article key={slug} className="post-item">
              <Link to={slug} title={title}>
                <span className="post-date">{getRelativeTime(date)}</span>
                <h3 className="post-title">{title}</h3>
                {description && <p className="post-description">{description}</p>}
              </Link>
            </article>
          );
        })}
      </div>
      <div className="view-all">
        <Link to="/blog">View all posts →</Link>
      </div>
    </section>
  );
}
