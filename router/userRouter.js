const router = require("express").Router();
const User = require("../models/userModels");

//database içerisindeki kullanıcıları çağırdığımız fonksiyon
router.get("/", async (req,res) => {
          const tumUserlar = await User.find({});
          res.json(tumUserlar);
});

router.post("/", async (req,res) => {
          try {
                    const eklenenKullanici = new User(req.body);
                    const result = await eklenenKullanici.save();
                    res.send(result);
          } catch (err) {
                    return console.log("kullanıcı kaydedilirken bir hata oluştu."+err);
          }
});


router.get("/:id",(req,res) => {
          res.json(`${req.params.id}'li dosyalar getiriliyor.`)
})



router.patch("/:id", async (req,res) => {
          try {
                    const geriDönenSonuc = await User.findByIdAndUpdate({_id : req.params.id},req.body,{new : true});
                    if(geriDönenSonuc){
                              return res.json({mesaj : `${req.params.id}'li kullanıcı güncellendi.`});
                    }else{
                              res.status(404).json({mesaj : "böyle bir kullanıcı bulunamadı."})
                    }
          } catch (error) {
                    res.json({hata_mesajı : "güncelleme işlemi sırasında bir hata oluştu."+error});  
          }
});


router.delete("/:id", async (req,res) => {
          
          try {
                    const geriDönenSonuc = await User.findByIdAndDelete({_id : req.params.id});
                    if(geriDönenSonuc){
                              return res.json({mesaj : `${req.params.id}'li kullanıcı silindi.`});
                    }else{
                              res.status(404).json({mesaj : "böyle bir kullanıcı bulunamadı."})
                    }
          } catch (error) {
                    res.json({hata_mesajı : "silme işlemi sırasında bir hata oluştu."+error});
          }

})

module.exports = router;