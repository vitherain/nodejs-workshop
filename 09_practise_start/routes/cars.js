/* TODO: Require express module (1 line is missing) */
/* TODO: And get the Router from it (1 line is missing) */
/* TODO: Now require the carModel and name it 'Cars' */


/* TODO: Write GET /cars/ handler. Find all cars in DB and send them as JSON response */


/* TODO: Write POST /cars/ handler.
 1. Create new Cars model object from the request body.
 2. Save it to DB.
 3. Send 201 status code after saving.
 4. Do not forget to end response handling.
*/

/* TODO: Write GET /cars/:carId handler.
 1. Use 'carId' request param to identify car which will be returned.
 2. Find the car in DB.
 3
    a. Send te car as JSON response if it was found.
    b. Send 404 status code if the car was NOT found.
 */

/* TODO: Write PUT /cars/:carId handler.
 1. Use 'carId' request param to identify car which will be updated.
 2. Update car with data in request body.
 3
    a. Send 200 status code after saving if update was successful.
    b. Send 404 status code if update was NOT successful (car was not found).
 4. Do not forget to end response handling.
 */

/* TODO: Write DELETE /cars/:carId handler.
 1. Use 'carId' request param to identify car which will be deleted.
 2. Remove the car.
 3
    a. Send 200 status code after deleting if the operation was successful.
    b. Send 404 status code if deleting was NOT successful (car was not found).
 4. Do not forget to end response handling.
 */

module.exports = router;
