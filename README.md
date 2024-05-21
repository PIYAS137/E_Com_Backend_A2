## API's :
| About  | Method  | Endpoint |
| :------------ |:---------------:|  -----:|
| create a product      | POST | /api/products |
| get all products      | GET | /api/products |
| query a product | DELETE | api/products?searchTerm=iPhone |
| get a product      | GET | /api/products/:productId |
| update a product      | PUT | /api/products/:productId |
| delete a product      | DELETE | /api/products/:productId |
| create a order  | POST | /api/orders |
| get all orders  | GET | /api/orders |
| search a order by email| GET | /api/orders?email=piyasmahmudealif@gmail.com |

## How To Run In Local Server :
> Note: `node.js` must be downloaded on the computer!.
- At first clone the git repository
```sh
git clone https://github.com/PIYAS137/E_Com_Backend_A2.git
```
- Setup the node environment
```sh
npm install
```
- Create .env file (Environment variable file) 
```sh
DB_URL = "...YOUR CLUSTER URL..."
PORT = 5000 / any
```
- Active TS config 
```sh
tsc -w
```
- Run on local server
```sh
npm start
```
- ESLint Check Up and Fix
```sh
npm run lint
npm run lint:fix
```
