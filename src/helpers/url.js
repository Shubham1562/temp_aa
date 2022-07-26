// export const ROOT = "http://localhost:3000";
// export const API_ROOT = "http://localhost:9000/api";
export const API_ROOT = "http://culturalcouncil.iitr.ac.in/api";


export const Apiurls = {
  rootUrl: () => `${API_ROOT}`,


  // Groups
  getAllGroups: () => `${API_ROOT}/groups`,
  createGroup: () => `${API_ROOT}/groups`,
  editGroup: (id) => `${API_ROOT}/groups/${id}`,
  deleteGroup: (id) => `${API_ROOT}/groups/${id}`,
  getSingleGroup: (id) => `${API_ROOT}/groups/${id}`,
  getSingleGroupOnlyDetails: (id) => `${API_ROOT}/groups/details/${id}`,
  getGroupMembers: (id) => `${API_ROOT}/groups/${id}/members`,
  getGroupNotices: (id, pageNo) => `${API_ROOT}/groups/${id}/notices?limit=10&offset=${(pageNo-1)*10}`,
  getGroupEvents: (id, pageNo) => `${API_ROOT}/groups/${id}/events?limit=12&offset=${(pageNo-1)*12}`,
  getGroupBlogs: (id, pageNo) => `${API_ROOT}/groups/${id}/blogs?limit=12&offset=${(pageNo-1)*12}`,
  getGroupLinks: (id) => `${API_ROOT}/groups/${id}/group-links`,
  getGroupGallery: (id, pageNo) => `${API_ROOT}/groups/${id}/gallery?limit=12&offset=${(pageNo-1)*12}`,
  


  //Council Details
  getCouncilDetails: () => `${API_ROOT}/council`,
  getCouncilTeam: (id) => `${API_ROOT}/council/team?post=${id}`,
  getCouncilLink: () => `${API_ROOT}/council/link`,

  // Auth
  createUser: () => `${API_ROOT}/auth/signup`,
  login: () => `${API_ROOT}/auth/signin`,
  verifyUser: () => `${API_ROOT}/auth/verify-user`,
  s3URL: () => `${API_ROOT}/s3URL`,


  // Notices
  createNotice: () => `${API_ROOT}/notices`,
  editNotice: (id) => `${API_ROOT}/notices/${id}`,
  deleteNotice: (id) => `${API_ROOT}/notices/${id}`,
  getAllNotices: (pageNo) => `${API_ROOT}/notices?limit=10&offset=${(pageNo-1)*10}`,
  getSingleNotice: (id) => `${API_ROOT}/notices/${id}`,


  
  // Events
  createEvent: () => `${API_ROOT}/events`,
  editEvent: (id) => `${API_ROOT}/events/${id}`,
  deleteEvent: (id) => `${API_ROOT}/events/${id}`,
  getAllEvents: (pageNo) => `${API_ROOT}/events?limit=12&offset=${(pageNo-1)*12}`,
  getSingleEvent: (id) => `${API_ROOT}/events/${id}`,

  // Blogs
  getAllBlogs: (pageNo) => `${API_ROOT}/blogs?limit=12&offset=${(pageNo-1)*12}`,
  getSingleBlog: (id) => `${API_ROOT}/blogs/${id}`,
  createBlog: () => `${API_ROOT}/blogs`,
  editBlog: (id) => `${API_ROOT}/blogs/${id}`,
  deleteBlog: (id) => `${API_ROOT}/blogs/${id}`,

  

  // links
  getAllLinks: (pageNo) => `${API_ROOT}/group-link?limit=9&offset=${(pageNo-1)*9}`,
  getSingleLink: (id) => `${API_ROOT}/group-link/${id}`,
  createLink: () => `${API_ROOT}/group-link`,
  editLink: (id) => `${API_ROOT}/group-link/${id}`,
  deleteLink: (id) => `${API_ROOT}/group-link/${id}`,
  

  // members
  getAllMembers: (pageNo) => `${API_ROOT}/members`,
  getSingleMember: (id) => `${API_ROOT}/members/${id}`,
  createMember: () => `${API_ROOT}/members`,
  editMember: (id) => `${API_ROOT}/members/${id}`,
  deleteMember: (id) => `${API_ROOT}/members/${id}`,


 //Gallery
  getAllGallery: (pageNo) => `${API_ROOT}/gallery?limit=12&offset=${(pageNo-1)*12}`,
  getSingleGallery: (id) => `${API_ROOT}/gallery/${id}`,
  createGallery: () => `${API_ROOT}/gallery`,
  createBatchGalleryContent: () => `${API_ROOT}/galleryContent/batch`,
  deleteBatchGalleryContent: () => `${API_ROOT}/galleryContent/batch`,
  editGallery: (id) => `${API_ROOT}/gallery/${id}`,
  deleteGallery: (id) => `${API_ROOT}/gallery/${id}`,

  // Contact Us
  getAllQueries: (pageNo) => `${API_ROOT}/query?limit=10&offset=${(pageNo-1)*10}`,
  submitQuery: () => `${API_ROOT}/query`,


  // Restaurants
  getAllRestaurants: () => `${API_ROOT}/restaurants`,
  getSingleRestaurant: (id) => `${API_ROOT}/restaurant/${id}`,
};
