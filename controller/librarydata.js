var Library = require('../model/librarydata');

exports.test = function (req,res) {
    res.send("Greetings from TEST Controller");
};

exports.library_info_all = function (req,res) {
    Library.find(function (err, library) {
        if (err) {
            return err;
        }
        res.send(library);
    });
};

exports.library_info_by_id = function (req,res) {
    Library.findById(req.params.id, function (err, library) {
        if (err) {
            return err;
        }
        res.send(library);
    }); 
};

exports.library_create = function (req,res) {
    console.log("Req Body:" + JSON.stringify(req.body));
    var library = new Library({
        Book:{
            title:req.body.title,
            published:req.body.published,
            type:req.body.type
        }, 
        Author:{
            name:req.body.name,
            gender:req.body.gender,
            birth:req.body.birth,
        }, 
        LibraryBranch:{
            city:req.body.city,
            state:req.body.state,
            zipcode:req.body.zipcode
        }, 
        Genre:{
            catergory:req.body.catergory,
            year:req.body.year
        }, 
        PublishingCompany:{
            name:req.body.name,
            manager:req.body.manager,
            location:req.body.location
        }, 
    });
    library.save(function (err, library) {
        if (err) {
            return err;
        }
        res.send("Library Data Created..." + library.id)
    });
};

exports.library_info_update_by_id = function (req,res) {
    Library.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        function (err, library) {
            if (err) {
                return err;
            }
            res.send("Library Data is updated:" + library);
        }
    );
};