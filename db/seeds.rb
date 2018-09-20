# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Photo.destroy_all

User.create({email: 'demo@email.com', password: 'hunter2', fname: 'Demo', lname: 'User', display_name: 'DemoUser', gender: 'Other'});
User.create({email: 'jean@email.com', password: 'password123', fname: 'Jean', lname: 'Ha', display_name: 'jeanha124', gender: 'Male'});
User.create({email: 'michael@email.com', password: 'password123', fname: 'Michael', lname: 'Hong', display_name: 'mikehong', gender: 'Male'});
User.create({email: 'jeffmisa@email.com', password: 'password123', fname: 'Jeff', lname: 'Misa', display_name: 'thisisjeff', gender: 'Male'});
User.create({email: 'hanalee@email.com', password: 'password123', fname: 'Hanna', lname: 'Lee', display_name: 'chloejio', gender: 'Female'});
User.create({email: 'joymo@email.com', password: 'password123', fname: 'Joy', lname: 'Mo', display_name: 'joyfuljoy', gender: 'Female'});

user = User.all
user1 = user[0].id
user2 = user[1].id
user3 = user[2].id
user4 = user[3].id
user5 = user[4].id
user6 = user[5].id





p1 = Photo.create({title: 'Couple', description: 'The couple getting married this weekend', owner_id: user1})
p2 = Photo.create({title: 'Girl in Amaze', description: 'Appearing out of nowhere', owner_id: user1})
p3 = Photo.create({title: 'In the wilderness', description: '', owner_id: user1})
p4 = Photo.create({title: 'Mom and Child', description: 'Walking down the street', owner_id: user1})
p5 = Photo.create({title: 'Amanda', description: '', owner_id: user1})
p6 = Photo.create({title: 'Amber', description: 'Dog', owner_id: user1})
p7 = Photo.create({title: 'Girl in Bubble', description: '', owner_id: user1})
p8 = Photo.create({title: 'Carol', description: '', owner_id: user1})
p9 = Photo.create({title: 'Daniel', description: 'Youtuber', owner_id: user1})
p10 = Photo.create({title: 'Cosplay', description: '', owner_id: user1})
p11 = Photo.create({title: 'Flowers', description: 'South Korea', owner_id: user1})
p13 = Photo.create({title: 'Grandma', description: '', owner_id: user1})
p14 = Photo.create({title: 'Isabel', description: '', owner_id: user1})
p15 = Photo.create({title: 'Isabel', description: '', owner_id: user1})
p16 = Photo.create({title: 'Boy on a Bench', description: '', owner_id: user1})
p17 = Photo.create({title: 'Jay', description: '', owner_id: user1})
p18 = Photo.create({title: 'Jean', description: '', owner_id: user1})
p19 = Photo.create({title: 'Jenn', description: '', owner_id: user1})
p20 = Photo.create({title: 'DjSiGuy', description: '', owner_id: user1})
p21 = Photo.create({title: 'Teresa', description: '', owner_id: user1})


p1.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/YBu5wSFhURZYCLoNNUsqz1pX'), filename: "friend1.jpg"});
p2.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/TWur5UMws4TV6MR3VRkYD6oz'), filename: "photo2.jpg"});
p3.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/LA1DxnEtsrHZwBEQEfUeTaHh'), filename: "photo1.jpg"});
p4.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/iNo99U4JzwHCZ99md7NwhXLK.jpg'), filename: "photo4.jpg"});
p5.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/rgmsQMakK6CrwVthQsrTeWin'), filename: "amanda.jpg"});
p6.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/Q4ik8HB2fuetyzrVH4xyZHaw'), filename: "amber.jpg"});
p7.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/NNtLJgUZfV4Ymq6HXiUCLgH5'), filename: "bubblegirl.jpg"});
p8.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/JqYHRrEtW1iumG2jM16d9qsP'), filename: "carol2.jpg"});
p9.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/Q6WBEmtHG3ymCoJ7SeqdWqeV'), filename: "dan1.jpg"});
p10.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/75tZ4RGFoHXSW7VuNLMcv2Qh'), filename: "cosplay.jpg"});
p11.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/e2NP1A9pJfaRnh5FmysprXvR'), filename: "flowers.jpg"});
p13.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/3PXPBxFkzjeaK8QLu6uyi2Qu'), filename: "grandma.jpg"});
p14.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/2TcTiG26sBTPuS5BYoXvp4PX'), filename: "isabel1.jpg"});
p15.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/yeEV8Km9qNfwy1AS8AzDjtbx'), filename: "isabel2.jpg"});
p16.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/bench.jpg'), filename: "bench.jpg"});
p17.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/DkrgBjxfzU1SeKiC441Kev1v'), filename: "jay.jpg"});
p18.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/oN3fa2f2eJXHzsXQm8nPTSw8'), filename: "jean1.jpg"});
p19.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/a1qXf5KdXZWdrW23JsYy6hRN'), filename: "jenn.jpg"});
p20.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/CGtwqZbYHc8chHUeU1tRrjqE'), filename: "simon.jpg"});
p21.picture.attach({io: EzDownload.open('https://s3.amazonaws.com/share-the-flare-dev/FrodHnj3NLNjTo4XEZ4E5pqp'), filename: "teresa1.jpg"});

