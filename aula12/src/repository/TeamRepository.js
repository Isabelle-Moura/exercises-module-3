const { ObjectId } = require("mongodb");

class TeamRepository {
    constructor(collection){
        this.collection = collection
    }

    async createTeam(team){
        await this.collection.insertOne(team)
    }

    async findTeamByName(name){
        return await this.collection.findOne({name: { $regex: name, $options: 'i' }})
    }

    async findTeamsOver10Points(){
        return await this.collection.find({points: {$gt: 10}}).toArray()
    }

    async findTeamsByCategory(category){
        return await this.collection.find({category: category}).toArray()
    }

    async updateTeam(id, newTeam){
        await this.collection.updateOne({_id: new ObjectId(id)}, {$set: newTeam})
    }

    async deleteTeam(id) {
        await this.collection.deleteOne({ _id: new ObjectId(id) });
      }
}

module.exports = TeamRepository