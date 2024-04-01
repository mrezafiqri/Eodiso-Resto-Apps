const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="bx bx-heart" style='color:#ffffff' aria-hidden="true"></i>
  </button>`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="bx bxs-heart" aria-hidden="true"></i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
