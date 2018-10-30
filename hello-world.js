const http = require( 'http' );
const port = 3000;

const fs = require( 'fs' );
const file = 'hello-world.txt';
const data = '"Hello to this great world"';

const reqHandler = ( req, res ) => {
  fs.writeFile( file, data, 'utf8', (err) => {
    if (err) { return console.log( err ) }
    console.log( `Data written to ${ file }` );
  } );
  res.end( data );
}

const server = http.createServer( reqHandler );
server.listen( port, (err) => {
  if (err) { return console.log( err ) }
  console.log( `Server listening on port ${ port }` );
} );
