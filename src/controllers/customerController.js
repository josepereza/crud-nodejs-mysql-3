const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err); //Manejar errores con next.
            }
            console.log(customers);
            res.render('customers', { //Cada vez que voy al inicio pido la lista de customers
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log("Mostrar data req.body");
    console.log(data);

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            if(err){
                console.log("ERROR");
                res.json(err);
            }else {
            console.log(customer);
            res.redirect("/");}
        })
    })
};


controller.edit = (req,res) => {
    const { id } = req.params;
    console.log(id);
    req.getConnection((err,conn) => {
        conn.query("SELECT * FROM customer WHERE id = ?", id, (err,customer) => {
            console.log(customer);
            res.render("customer_edit", {
                data: customer[0]
            });
        });
    });

};

controller.update = (req,res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection ((err,conn) => {
        conn.query("UPDATE customer set ? WHERE id = ?", [newCustomer,id], (err,customer) => {
            if(err){
                console.log("ERROR");
                res.json(err);
            } else {
                res.redirect("/");
            }
        })
    })
}

// La interrogacion "?" hace referencia a el arreglo [data]

controller.deleted = (req, res) => {
    const { id } = req.params;
    console.log(id);
    req.getConnection((err,conn) => {
        conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) =>{
            if (err){
                res.json(err);
            }else {
                res.redirect("/");
            }
        })
    })


    //res.redirect("/");
};


module.exports = controller;