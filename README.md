# The Better PokeAPI™️

A backend that abstracts some aspects and combines features of the PokeAPI. For instance, an endpoint that just gets the name, image, and type of a specific Pokemon. 

### API Endpoints
**Subject to change -> may add more endpoints if ya'll think this is too easy**.

All API endpoints exist in the `pages/api` folder of the Next.js project.
```http
GET /
```
- returns the name, sprite, and type of random Pokemon

```http
GET /pokemon/:name
```
- returns the name, sprite, and type of a certain Pokemon

```http
GET /types/:type
```
- returns a list of Pokemon of this type

```http
GET /evolve/:name
```
- returns the next evolution step for a specified Pokemon. If the Pokemon is fully evolved, return the current evolution stage

```http
GET /experience/:name?level={level_num}
```
- calculates and returns the experience a Pokemon has based on its name and level.
- level is passed into the the request as a **query** parameter
```http
POST /battle
```
- Body of the request
	- `pokemon1` - the name of the first Pokemon to be battled (String)
	- `pokemon2` - the name of the second Pokemon to be battled (String)
- `pokemon1` and `pokemon2` are name strings sent in the **body** of the post request. Returns the pokemon with the higher base stat. 

```http
POST /catch
```
- Returns whether a Pokemon is caught based on the its HP. Assume that a regular Poke Ball is used. Assume that the capture method follows the algorithms in Generation I.
- Capture Algorithm (Generation I)
	- Generate a random integer between $[1, 255]$ called $N$
	- Generate a random integer between $[1, 255]$ called $BALL$
	- Generate a random integer between $[1, HP_{max}]$ called $HP_{current}$
	- Calculate $f$ based on the formula $f = \frac{(HP_{max} \times 255 \times 4)}{(HP_{current} \times BALL)}$
	- If $f \ge N$, then the Pokemon is **caught**
	- Otherwise, the Pokemon **breaks free** 
- Body of the request
	- `pokemon` - name of the pokemon (String)


