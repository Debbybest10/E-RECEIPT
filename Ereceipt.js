
$(function () {
    let drugs = [{ name: "Paracetamol", qt: 2, price: 100 }, { name: "Bco", qt: 0, price: 200 }, { name: "Septrin", qt: 0, price: 100 }, { name: "Tetra", qt: 0, price: 400 }, { name: "Chloroquine", qt: 0, price: 50 }, { name: "Chloramphelico", qt: 0, price: 300 }, { name: "Vitamin C Yellow", qt: 0, price: 100 }, { name: "Vitamin C White", qt: 0, price: 120 }, { name: "Flagyl", qt: 0, price: 50 }, { name: "Calcium B3", qt: 0, price: 1200 }, { name: "Amocylin", qt: 0, price: 300 }];
    let pressme = 0, prodname, index, namepr, intro, intro2, intro3;
    let newd = [], ded = 0, overon = 0;
    let i, j, k, prodprice, total, grandtot = 0, formal;
    for (i = 0; i < drugs.length; i++) {
        prodname = drugs[i].name;
    }
  
    function calamount() {
        grandtot = 0;
        newd.forEach(max => {
            console.log(max.total1);
            grandtot = Number(grandtot + Number(max.total1));
        });
    }


    show()
    function show() {
        $('#table').html("")
        intro = `<th>S/N</th><th>NAME</th><th>QUANTITY</th><th>PRICE</th><th>TOTAL</th><th>ACTION</th>`;
        calamount();
        document.getElementById('grandtot').innerHTML = `GRAND TOTAL=#${grandtot}`
        console.log(newd.length);
        $('#table').html(intro)
        for (k = 0; k < newd.length; k++) {
            index = k;
            intro2 = `<td class="display">${k + 1}</td><td class="display" id="proname">${newd[k].value}</td><td class="display" id="quantity">${newd[k].qty}</td><td class="display" id="pricen">${newd[k].pricet}</td><td class="display" id="amountpp">${newd[k].total1}</td><td class="display"><button class="btn btn-primary" id=edit>EDIT</button><button class="btn btn-danger ml-2 del-btn">DELETE</button></td>`;
            $('#table').append(`<tr>${intro2}</tr>`)

        }
        for (i = 0; i < ded; i++) {
            intro3 = `<td class="display">${k + 1}</td><td class="display" contenteditable="true" id="valname"></td><td class="display" contenteditable="true" id="qtty"></td><td class="display" id="pricee"></td><td class="display" id="amountP"></td><td class="display"><button class="btn btn-primary">EDIT</button><button class="btn btn-danger ml-2 del-btn">DELETE</button></td>`;
            $('#table').append(`<tr>${intro3}</tr>`)
        }
    }
    let getDelBtn = () => {
        let delBtns = $('.del-btn');
        for(let j=0; j<delBtns.length;j++){
        delBtns[j].addEventListener('click', ()=>{
            console.log('kkk');
            newd.splice(j, 1)
                console.log(newd);
                ded = 1;
                show()
                setTimeout(() => {
                    ded = 0;
                }, 1000);
        });
        }
      
    }
    $('body').on('click', (e) => {
        if (e.target.classList.contains('del-btn')) {
            getDelBtn();
        }
    })
   

    $('#add').click(addtable)
    function addtable() {
        pressme++
        ded++
        setTimeout(() => {
            ded = 0;
            overon = 0;
        }, 1000);
        if (pressme == 1) {
            show();
        }
        else if (pressme > 1) {
            if ($('#qtty').html() == "" && $('#valname').html() == "") {
                console.log("errro");
            }
            else {
                newd.push({ value: $('#valname').html(), qty: $('#qtty').html(), pricet: $('#pricee').html(), total1: $('#amountP').html() });
                show();
            }
        }
        getDelBtn();
    }

    $('#sub').click(deltable)
    function deltable(params) {
        ded = 0;
        for (i = 0; i < newd.length; i++) {
            newd.splice(newd, newd.length)
            console.log(newd);
        }
        pressme = 0;
        show();
    }

    $('#table').on('mouseout', "#valname", produn)
    function produn(params) {
        for (i = 0; i < drugs.length; i++) {
            if ($('#valname').html() == drugs[i].name || $('#valname').html() == drugs[i].name.toLowerCase()) {
                console.log(i);
                $('#valname').html("")
                $('#valname').html(drugs[i].name);
                $('#pricee').html(drugs[i].price);
                return;
            }
            else if ((i == drugs.length - 1) && ($('#valname').html() != drugs[i].name || $('#valname').html() != drugs[i].name.toLowerCase())) {
                $('#valname').html("");
                $('#valname').html("No such Drug")
            }
        }
    }

    $('#table').on('click', "#valname", reloa)
    function reloa() {
        $('#valname').html("")
        $('#pricee').html("")
    }
    $('#table').on('click', "#quantity", relo)
    function relo(params) {
        $(this).html("");
    }

    $('#table').on('mouseout', "#qtty", calcAm)
    function calcAm(params) {
        grandtot = 0;
        $('#amountP').html("");
        let amount = Number($(this).next().html() * $(this).html());
        $(this).next().next().html(amount);
        newd.forEach(function (max) {
            grandtot = Number(grandtot + (Number(max.total1)));
            console.log(grandtot);
        })
        document.querySelectorAll('#amountP').forEach(function (max) {
            grandtot = grandtot + Number(max.innerHTML);
            console.log(grandtot);
        })
        $('#grandtot').html(`GRAND TOTAL=#${grandtot}`);
    }


    $('#table').on('click', '#edit', edi)
    function edi(params) {
        if (index == index) {
            console.log(index);
            ($(this).parents().prevAll('#quantity')).attr('contentEditable', 'true');
        }
    }

    $('#table').on('mouseout', "#quantity", editQuant)
    function editQuant(params) {
        if (index == index) {
            console.log($('#quantity').html());
            $('#grandtot').html('');
            $(this).attr('contentEditable', 'false')
            $(this).next().next().html("");
            let amount = Number($(this).next().html() * $(this).html());
            $(this).next().next().html(amount);
            grandtot = 0;
            console.log(formal);
            document.querySelectorAll('#amountpp').forEach(function (max) {
                grandtot = grandtot + Number(max.innerHTML);
                console.log(grandtot);
            })
            $('#grandtot').html(`GRAND TOTAL=#${grandtot}`);
            newd[index].total1 = Number($(this).next().next().html())
            newd[index].qty = Number($(this).html())
        }
    }
})

