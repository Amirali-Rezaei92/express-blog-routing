const posts = require("../data/posts");

function index(req, res) {
    res.json(posts);
}

function show(req,res){
    const id = req.params.id;
    const post= posts.find(p=>p.id==id);
    if(!post){
        return res.status(404).json({error: "post non trovato"});
    }
    res.json(post)
}

function create(req,res){
    res.json({message: "Creazione di un nuovo post"});
}

function update(req, res){
    const id= req.params.id;
    res.json({message:`Aggiornamento del post ${id}`});
}
function destroy(req,res){
    const id = req.params.id;
    res.json({message : `Cancellazione del post ${id}`});
}

module.exports={
    index,
    show,
    create,
    update,
    destroy
};