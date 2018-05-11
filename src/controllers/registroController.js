const controller = {};

controller.lista = (req, res) => {
    req.getConnection( (err, conn) => {
        conn.query('SELECT * FROM registros', (err, registros) => {
            if(err){
                res.json(err);
            }
            //console.log(registros);
            res.render('registros', {
                data: registros
            });
        });
    });
};

controller.guardar = (req, res) => {
    //console.log(req.body);
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO registros set ?', [data], (err, registros) => {
            //console.log(registros);
            res.redirect('/');
        })
    })
};

controller.actualizar = (req, res) => {
    //console.log(req.params.id);
    const {id} = req.params;
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registros WHERE id = ?', [id], (err, registros) => {
            //console.log(registros);
             res.render('registros_actualizar', {
                data: registros[0]
            });
        })
    })
};

controller.actualizando = (req, res) => {
    //console.log(req.params.id);
    const {id} = req.params;
    const datoActualizado = req.body;
    
    req.getConnection((err, conn) => {
        conn.query('UPDATE registros set ? WHERE id = ?', [datoActualizado,id], (err, registros) => {
            //console.log(registros);
             res.redirect('/');
        })
    })
};

controller.borrar = (req, res) => {
    //console.log(req.params.id);
    const {id} = req.params;
    
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM registros WHERE id = ?', [id], (err, registros) => {
            //console.log(registros);
            res.redirect('/');
        })
    })
};

module.exports = controller;