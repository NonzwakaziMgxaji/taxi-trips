module.exports = function(pool) {

    async function totalTripCount(){
        let total = await pool.query('select taxi_id from trip')
        return total.rowCount;
    }

    async function findAllRegions(){
        let allRegions = await pool.query('select name from region');
        return allRegions.rows;
    }

    async function findTaxisForRegion(region){
        // let regionID = await pool.query('select * from region where name = $1', [region]);
        
        // let id = regionID.rows[0].id;
        // let taxiID = await pool.query('select regNo from taxi where region_id = $1', [id])

        let regionID = await pool.query('select regNo from taxi join region on region.id = taxi.region_id where region.name = $1', [region]);
        return regionID.rows;
    }

    async function findTripsByRegNumber(reg){
        let tripsByReg = await pool.query('select taxi_id from trip join taxi on taxi.id = trip.taxi_id where regNo = $1', [reg]);
        return tripsByReg.rows;
    }

    async function findTripsByRegion(){

        
    }

    async function findIncomeByRegNumber(){
        
    }

    async function findTotalIncomePerTaxi(){
        
    }

    async function findTotalIncome(){
        
    }

    async function findTotalIncomeByRegion(){
        
    }

    return{
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion







    }
	
}