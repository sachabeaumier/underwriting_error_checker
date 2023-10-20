/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('customerdb', (table) => {
    table.integer('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('age')
    table.string('gender')
    table.string('driving_experience')
    table.string('education')
    table.string('income')
    table.float('credit_score')
    table.string('vehicle_ownership')
    table.string('vehicle_year')
    table.boolean('married')
    table.boolean('children')
    table.integer('postal_code')
    table.float('annual_mileage')
    table.string('vehicle_type')
    table.integer('speeding_violations')
    table.integer('DUIs')
    table.integer('past_accidents')
    table.boolean('outcome')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('customerdb')
}

// id	first_name	last_name	age	gender	driving_experience	education	income	credit_score	vehicle_ownership	vehicle_year	married	children	postal_code	annual_mileage	vehicle_type	speeding_violations	DUIs	past_accidents	outcome
