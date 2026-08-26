export default function Feedsausgeben({ feeds }) {
  const safeFeeds = Array.isArray(feeds) ? feeds : [];

  if (safeFeeds.length === 0) {
    return (
      <div>
        
      </div>
    );
  }

  return (
    <div>
      {safeFeeds.map((feed) => (
        <div className="feedcard" key={feed.link}>  {/* ← key hierher */}
          <div>
            <div className="feeddate">
              <h5>
                {new Date(feed.pubDate).toLocaleString('de-DE', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </h5>
            </div>
            <div className="feedtitle">
              <a href={feed.link} target="_blank" rel="noopener noreferrer">
                {feed.title}
              </a>
            </div>
            <hr />
            <p className="feedcontent">{feed.contentSnippet}</p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}