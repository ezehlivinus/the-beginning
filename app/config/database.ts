// import mongoose from 'mongoose';

// module.exports = function init() {
//   if (uri) {
//     mongoose.connect(
//       uri,
//       (err) => {
//         if (err) {
//           console.log('Database connection failed');
//         } else {
//           console.log('Successfully connected to MongoDB');
//         }
//       },

//     );
//   } else {
//     throw new Error('DB URI not found, please kindly check your connection strings to mongoose');
//   }
// };

import mongoose from 'mongoose';

import log from './logger';

const URI = <string>process.env.DATABASE_URL;

function connect() {
  mongoose
    .connect(URI)
    .then(() => {
      log.info('database connected');
    })
    .catch((error) => {
      log.error('database error', error);

      log.info('Trying to reconnect database...');
      connect();
    });
}

export default connect;
