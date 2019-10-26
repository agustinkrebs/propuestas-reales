async function typeFilter(posts, type) {
    if (type !== '-') {
        posts = posts.filter((p) => p.type === type);
      }
    return posts;
  }

async function ministryFilter(posts, ministry) {
  if (ministry !== '-') {
      posts = posts.filter((p) => p.ministries.includes(ministry));
    }
  return posts;
}

export default {
  typeFilter,
  ministryFilter,
};