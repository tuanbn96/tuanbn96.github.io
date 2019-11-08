var initialState = [
    {
        id:1,
        name:'Banh tráng trộn',
        img:'https://images.foody.vn/res/g87/861585/s570x570/1b4bf165-7d91-448a-b94b-3e1a0e8bf2f2.jpg',
        type:1,
        amount:1,
        price:20000
    },
    {
        id:2,
        name:'Bánh mỳ muối ớt',
        img:'https://images.foody.vn/res/g87/861585/s570x570/3cb3eecd-3d46-45b5-a1d7-9f9d4168a32a.jpg',
        type:1,
        amount:1,
        price:20000
    },{
        id:3,
        name:'Bánh Tráng Cuốn',
        img:'https://images.foody.vn/res/g87/861585/s570x570/ffb7339e-d311-47cf-9f94-96a8756c5875.jpg',
        type:1,
        amount:10,
        price:30000
    },{
        id:4,
        name:'Nem chua rán',
        img:'https://images.foody.vn/res/g87/861585/s570x570/e77c1e3e-4bbf-40ad-821f-1d84309932d9.jpg',
        type:1,
        amount:5,
        price:30000
    },{
        id:5,
        name:'Trà thái',
        img:'https://images.foody.vn/res/g87/861585/s570x570/76871ddb-852c-46be-99c7-c7339e97da7e.jpg',
        type:2,
        amount:1,
        price:15000
    },{
        id:6,
        name:'Trà sữa đặc biệt',
        img:'https://images.foody.vn/res/g87/861585/s570x570/ac65314a-accb-47db-8537-8eb603fe6363.jpg',
        type:2,
        amount:1,
        price:20000
    },{
        id:7,
        name:'Trà sữa socola',
        img:'https://images.foody.vn/res/g87/861585/s570x570/1fdcb86b-e0f4-4ec9-bc35-facaeafa8a58.jpg',
        type:2,
        amount:1,
        price:25000
    },{
        id:8,
        name:'Trà sữa matcha',
        img:'https://images.foody.vn/res/g87/861585/s570x570/1b5136b6-ab88-421a-88f0-1791ed453965.jpg',
        type:2,
        amount:1,
        price:22000
    },{
        id:9,
        name:'Trà sữa bạc hà',
        img:'https://images.foody.vn/res/g87/861585/s570x570/2f3a2528-47a6-420a-9a2b-7d06573db4bb.jpg',
        type:2,
        amount:1,
        price:20000
    },{
        id:10,
        name:'Nước ép hoa quả',
        img:'https://images.foody.vn/res/g64/635171/s570x570/9a8a54fc-8b1f-4853-b898-a44df5ab3c44.jpg',
        type:2,
        amount:1,
        price:25000
    },{
        id:11,
        name:'Bánh mì thịt nướng',
        img:'https://images.foody.vn/res/g64/635171/s570x570/9b4a6c65-f0e1-466f-873f-79d17b2aa96d.jpg',
        type:1,
        amount:1,
        price:20000
    },{
        id:12,
        name:'Bánh mì thập cẩm',
        img:'https://images.foody.vn/res/g64/635171/s570x570/87892d8d-cbec-435a-b883-b590ba08051a.jpg',
        type:1,
        amount:1,
        price:22000
    },{

        id:13,
        name:'Combo đùi gà khoai Tây CoCa',
        img:'https://images.foody.vn/res/g96/955162/s570x570/1dc73c94-8ea0-4f32-97f6-38373e0815a3.jpg',
        type:3,
        amount:1,
        price:45000
    },
    {

        id:14,
        name:'Combo đùi gà rán khoai tâyCombo 2',
        img:'https://images.foody.vn/res/g96/955162/s570x570/5a12b68a-7a41-47c7-8892-95e7549e66c1.jpg',
        type:3,
        amount:1,
        price:35000
    },
    {

        id:15,
        name:'Cơmbo đùi gà, cánh gàCombo 3',
        img:'https://images.foody.vn/res/g96/955162/s570x570/26246301-8967-4e0a-9f0d-c8eca3d453fc.jpg',
        type:3,
        amount:1,
        price:55000
    },
    {

        id:16,
        name:'Combo cánh gà rán khoai tây',
        img:'https://images.foody.vn/res/g96/955162/s570x570/6bb88f68-6ca2-4e07-ac7c-55eac53deabe.jpg',
        type:3,
        amount:1,
        price:45000
    },
    {

        id:17,
        name:'Combo cánh gà khoai Tây coca',
        img:'https://images.foody.vn/res/g96/955162/s570x570/1c62ddb0-2d8d-4bd5-8642-1c9a9b79ae68.jpg',
        type:3,
        amount:1,
        price:40000
    }
];

const products = (state = initialState,action) =>{
    switch (action.type) {
        default: return [...state];
            
           
    }
}

export default products;