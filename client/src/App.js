import React, { useState } from 'react';
import './App.css';
import NytForm from './nytForm';
import Progress from './progress';
import Article from './article';
import { NYTRequest } from './utils/api';

function App() {
  const [url, setUrl] = useState('');
  const [newsSource, setNewsSource] = useState();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(undefined);
  const handleChange = value => {
    setUrl(value);
  };
  const onNewsSourceChange = value => {
    setNewsSource(value);
  };
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await NYTRequest(url, newsSource);
      setArticle(data);
    } catch (e) {
      setArticle({ data: e.message, title: 'Problem finding article' });
    }
    setLoading(false);
  };
  return (
    <div className="container mb-5">
      <NytForm
        url={url}
        newsSource={newsSource}
        onNewsSourceChange={onNewsSourceChange}
        onUrlChange={handleChange}
        onSubmit={handleSubmit}
      />
      {loading && <Progress />}
      {!loading && article && (
        <Article article={article.data} title={article.title} />
      )}
      {!loading && !article && (
        <div>
          <h1>Read your favorite Newspaper while being cheap</h1>
          <p>Post the url of the article you want above</p>
        </div>
      )}
    </div>
  );
}

export default App;
