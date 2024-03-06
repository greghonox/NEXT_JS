const randomNumber = Math.random();


export default function Product(req, res) {
var list = []
for (var i = 0; i < 10000; i++){
        list.push(i * randomNumber);
    }
return res.status(200).json({'list': list})
}