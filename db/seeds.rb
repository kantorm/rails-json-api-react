# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FactoryGirl.find_definitions

15.times do |n|
  FactoryGirl.create(:category, :with_posts)
end

25.times do |n|
  u = User.create!(email: "user#{n}@example.com", password: 'Secret123', confirmed_at: Time.now)
  u.add_role n == 0 ? :admin : :user
end

25.times do |n|
  FactoryGirl.create(:order)
end

25.times do |n|
  FactoryGirl.create(:supplier)
end

25.times do |n|
  FactoryGirl.create(:customer)
end

20.times do |n|
  FactoryGirl.create(:product)
end

20.times do |n|
  FactoryGirl.create(:employee)
end
