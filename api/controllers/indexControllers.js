module.exports =  {
    index,
    muscular,
    superiores,
    cutaneos
}

function index (req, res){
    res.render('index.ejs',
        {title: 'Rotas',
            mensagem: 'Iniciando com NodeJS e Express',
            conteudo: 'Corpo da Página - vh x vw',
            autor: '2º DSM - WEB II'
        
        })
}

function muscular (req, res){
    res.render('muscular/muscular.ejs',
        {title: 'Muscular',
            mensagem: 'Musculos',            
            autor: 'Guilherme Almeida'
        
        })
}

function superiores (req, res){
    res.render('muscular/superiores/superiores.ejs',
        {title: 'Superiores',
            mensagem: 'Musculos',            
            autor: 'Guilherme Almeida'
        
        })
}


function cutaneos (req, res){
    res.render('muscular/superiores/cutaneos/cutaneos.ejs',
        {title: 'Cutaneos',
            mensagem: 'Musculos',            
            autor: 'Guilherme Almeida'
        
        })
}
