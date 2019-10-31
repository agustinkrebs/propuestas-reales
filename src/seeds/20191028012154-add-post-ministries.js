
module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   

   const ministriesPostData = [
        {
        
                ministryId: 14,
                postId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 20,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 9,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 12,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 13,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 14,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 17,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 18,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 19,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 19,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 21,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 12,
                postId: 22,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 23,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 25,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 26,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 27,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 28,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 29,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 16,
                postId: 29,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 3,
                postId: 31,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 32,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 33,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 33,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 33,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 16,
                postId: 33,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 34,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 34,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 34,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 35,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 37,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 38,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 39,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 39,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 40,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 12,
                postId: 41,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 42,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 42,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 43,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 45,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 46,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 47,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 48,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 49,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 49,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 49,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 50,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 51,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 52,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 53,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 54,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 55,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 56,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 57,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 58,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 59,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 60,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 61,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 62,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 63,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 63,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 63,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 64,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 64,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 64,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 64,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 65,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 66,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 67,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 12,
                postId: 68,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 16,
                postId: 68,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 68,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 69,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 69,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 22,
                postId: 69,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 69,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 70,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 71,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 71,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 72,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 74,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 74,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 74,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 74,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 75,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 75,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 3,
                postId: 76,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 76,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 76,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 81,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 82,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 83,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 84,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 85,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 86,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 86,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 86,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 87,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 87,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 87,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 88,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 88,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 88,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 90,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 90,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 90,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 21,
                postId: 90,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 91,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 92,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 93,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 93,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 93,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 93,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 94,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 94,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 94,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 94,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 95,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 96,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 96,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 97,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 97,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 98,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 98,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 99,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 100,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 100,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 101,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 102,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 103,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 103,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 103,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 103,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 22,
                postId: 103,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 21,
                postId: 105,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 106,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 107,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 109,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 110,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 111,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 12,
                postId: 112,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 113,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 114,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 115,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 118,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 120,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 122,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 123,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 123,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 124,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 3,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 16,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 125,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 126,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 127,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 3,
                postId: 127,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 127,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 127,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 128,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 129,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 7,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 130,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 131,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 132,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 132,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 132,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 19,
                postId: 132,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 133,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 134,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 135,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 136,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 137,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 20,
                postId: 137,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 138,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 3,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 9,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 18,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 20,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 21,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 139,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 140,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 141,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 142,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 143,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 144,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 145,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 146,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 14,
                postId: 146,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 23,
                postId: 146,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 147,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 148,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 149,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 150,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 151,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 151,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 152,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 152,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 153,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 153,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 153,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 153,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 22,
                postId: 153,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 154,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 155,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 156,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 157,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 160,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 161,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 162,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 162,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 163,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 164,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 165,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 166,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 166,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 9,
                postId: 166,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 16,
                postId: 166,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 167,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 168,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 169,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 3,
                postId: 169,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 20,
                postId: 170,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 9,
                postId: 171,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 11,
                postId: 171,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 12,
                postId: 171,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 171,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 171,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 18,
                postId: 171,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 173,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 5,
                postId: 173,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 174,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 175,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 176,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 177,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 178,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 179,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 180,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 181,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 182,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 21,
                postId: 183,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 21,
                postId: 184,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 185,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 8,
                postId: 186,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 187,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 188,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 189,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 9,
                postId: 190,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 13,
                postId: 190,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 190,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 192,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 15,
                postId: 193,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 194,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 17,
                postId: 194,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 2,
                postId: 195,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 196,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 6,
                postId: 196,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 10,
                postId: 198,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 1,
                postId: 199,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        {
        
                ministryId: 4,
                postId: 199,
                createdAt: new Date(),
                updatedAt: new Date(),
        },
        ];

    return queryInterface.bulkInsert('post_ministries', ministriesPostData);
  },

  down: (queryInterface) => queryInterface.bulkDelete('post_ministries', null, {}),
};
