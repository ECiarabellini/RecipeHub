
const seedUsers = require('./users-seeds');
const seedRecipes = require('./recipes-seeds');

async function seedAll() {
    await seedUsers();
    await seedRecipes();
}

seedAll().then(() => {
    console.log('Database seeding completed!');
    process.exit(0);
}).catch((err) => {
    console.error('Database seeding failed:', err);
    process.exit(1);
});
