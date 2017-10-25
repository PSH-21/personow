# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


lhl = Group.create!(name: 'LHLabs', description: 'Awesome coding bootcamp. Web and IOS. Eight weeks. Etc.')
lht = Group.create!(name: 'LHTheatre', description: 'What if Shakespeare knew javascript? Find out with us.')
cn = Group.create!(name: 'Code Nappers', description: 'We code. We nap.')

ua = User.create!(email: 'alicegrey@email.com', name: 'Alice Grey')
ub = User.create!(email: 'bobmcrob@email.com', name: 'Bob McRobert')
uc = User.create!(email: 'charliehorse@email.com', name: 'Charlie Horse')
ud = User.create!(email: 'dandee@email.com', name: 'Dan D.')
ue = User.create!(email: 'edovanera@email.com', name: 'Ed Ovanera')
uf = User.create!(email: 'frankghost@email.com', name: 'Frank Ghost')
ug = User.create!(email: 'gusgus@email.com', name: 'Gus Gus')
uh = User.create!(email: 'hailystorm@email.com', name: 'Haily Storm')

dd = Event.create!(title: 'Demo Day', description: 'Come see what the cohort has put together.',
                  start_date: "2017-11-02 00:00:00", end_date: "2017-11-02 00:00:00",
                  group_id: lhl.id)
ham = Event.create!(title: 'Hamlet()', description: 'Revenge has called for him.',
                  start_date: "2017-10-28 00:00:00", end_date: "2017-10-29 00:00:00",
                  group_id: lht.id)
fgs = Event.create!(title: 'Family Garage Sale', description: 'Help us organise our garage sale. Get first pick and a good deal.',
                    start_date: "2017-10-30 00:00:00", end_date: "2017-10-31 00:00:00")

bar = Role.create(title: 'Bar', description: 'Serve snacks and drinks to patrons.',
            event_id: ham.id)
door = Role.create(title: 'Door', description: 'Take tickets and usher patrons to seats.',
            event_id: ham.id)
gv = Role.create(title: 'General Volunteer', description: 'Give us a helping hand reaching our event goals.',
            event_id: fgs.id)
mc = Role.create(title: 'MC', description: 'Get the audience ready for our project demonstrations.',
            event_id: dd.id)

GroupMember.create(group_id: lhl.id, user_id: ua.id)
GroupMember.create(group_id: lhl.id, user_id: ub.id)
GroupMember.create(group_id: lht.id, user_id: uc.id)
GroupMember.create(group_id: lht.id, user_id: ud.id)
GroupMember.create(group_id: cn.id, user_id: ue.id)
GroupMember.create(group_id: cn.id, user_id: uf.id)
GroupMember.create(group_id: lhl.id, user_id: ug.id)
GroupMember.create(group_id: lht.id, user_id: uh.id)

EventMember.create(event_id: dd.id, user_id: ua.id)
EventMember.create(event_id: fgs.id, user_id: uf.id)
EventMember.create(event_id: fgs.id, user_id: ub.id)

EventMember.create(event_id: ham.id, user_id: uc.id)
EventMember.create(event_id: ham.id, user_id: ud.id)
EventMember.create(event_id: ham.id, user_id: uh.id)


Shift.create(role_id: mc.id, user_id: ua.id,
             start_time: '2017-11-02 13:00:00', end_time: '2017-11-02 17:00:00')

Shift.create(role_id: gv.id, user_id: uf.id,
             start_time: '2017-10-30 10:00:00', end_time: '2017-10-30 18:00:00')
Shift.create(role_id: gv.id, user_id: ub.id,
             start_time: '2017-10-31 10:00:00', end_time: '2017-10-31 18:00:00')

Shift.create(role_id: bar.id, user_id: uc.id,
             start_time: '2017-10-28 13:00:00', end_time: '2017-10-28 17:00:00')
Shift.create(role_id: door.id, user_id: ud.id,
             start_time: '2017-10-28 13:00:00', end_time: '2017-10-28 17:00:00')
Shift.create(role_id: door.id, user_id: nil,
             start_time: '2017-10-28 13:00:00', end_time: '2017-10-28 17:00:00')
Shift.create(role_id: bar.id, user_id: uc.id,
             start_time: '2017-10-28 18:00:00', end_time: '2017-10-28 22:00:00')
Shift.create(role_id: door.id, user_id: ud.id,
             start_time: '2017-10-28 18:00:00', end_time: '2017-10-28 22:00:00')
Shift.create(role_id: door.id, user_id: nil,
             start_time: '2017-10-28 18:00:00', end_time: '2017-10-28 22:00:00')
Shift.create(role_id: bar.id, user_id: nil,
             start_time: '2017-10-29 13:00:00', end_time: '2017-10-29 17:00:00')
Shift.create(role_id: door.id, user_id: uh.id,
             start_time: '2017-10-29 13:00:00', end_time: '2017-10-29 17:00:00')
Shift.create(role_id: door.id, user_id: uh.id,
             start_time: '2017-10-29 13:00:00', end_time: '2017-10-29 17:00:00')
Shift.create(role_id: bar.id, user_id: nil,
             start_time: '2017-10-29 18:00:00', end_time: '2017-10-29 22:00:00')
Shift.create(role_id: door.id, user_id: nil,
             start_time: '2017-10-29 18:00:00', end_time: '2017-10-29 22:00:00')
Shift.create(role_id: door.id, user_id: nil,
             start_time: '2017-10-29 18:00:00', end_time: '2017-10-29 22:00:00')