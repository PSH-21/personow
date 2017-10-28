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

ua = User.create!(email: 'alicegrey@email.com', password_digest: '0000',
                  name: 'Alice Grey', notification: true, token: 1)
ub = User.create!(email: 'bobmcrob@email.com', password_digest: '0000',
                  name: 'Bob McRobert', notification: true, token: 2)
uc = User.create!(email: 'charliehorse@email.com', password_digest: '0000',
                  name: 'Charlie Horse', notification: true, token: 3)
ud = User.create!(email: 'dandee@email.com', password_digest: '0000',
                  name: 'Dan D.', notification: true, token: 4)
ue = User.create!(email: 'edovanera@email.com', password_digest: '0000',
                  name: 'Ed Ovanera', notification: true, token: 5)
uf = User.create!(email: 'frankghost@email.com', password_digest: '0000',
                  name: 'Frank Ghost', notification: true, token: 6)
ug = User.create!(email: 'gusgus@email.com', password_digest: '0000',
                  name: 'Gus Gus', notification: true, token: 7)
uh = User.create!(email: 'hailystorm@email.com', password_digest: '0000',
                  name: 'Haily Storm', notification: true, token: 8)

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

GroupMember.create(group_id: lhl.id, user_id: ua.id,
                   admin: false, creator: true, notifications: true)
GroupMember.create(group_id: lhl.id, user_id: ub.id,
                   admin: false, creator: false, notifications: true)
GroupMember.create(group_id: lht.id, user_id: uc.id,
                   admin: false, creator: true, notifications: true)
GroupMember.create(group_id: lht.id, user_id: ud.id,
                   admin: false, creator: false, notifications: true)
GroupMember.create(group_id: cn.id, user_id: ue.id,
                   admin: false, creator: true, notifications: true)
GroupMember.create(group_id: cn.id, user_id: uf.id,
                   admin: false, creator: false, notifications: true)
GroupMember.create(group_id: lhl.id, user_id: ug.id,
                   admin: false, creator: false, notifications: true)
GroupMember.create(group_id: lht.id, user_id: uh.id,
                   admin: false, creator: false, notifications: true)

EventMember.create(event_id: dd.id, user_id: ua.id,
                   admin: false, creator: true, notifications: true)

EventMember.create(event_id: fgs.id, user_id: uf.id,
                   admin: false, creator: true, notifications: true)
EventMember.create(event_id: fgs.id, user_id: ub.id,
                   admin: false, creator: false, notifications: true)

EventMember.create(event_id: ham.id, user_id: uc.id,
                   admin: false, creator: true, notifications: true)
EventMember.create(event_id: ham.id, user_id: ud.id,
                   admin: false, creator: false, notifications: true)
EventMember.create(event_id: ham.id, user_id: uh.id,
                   admin: false, creator: false, notifications: true)


Shift.create(role_id: mc.id, user_id: ub.id,
             start_time: '2017-11-02 13:00:00', end_time: '2017-11-02 17:00:00')

Shift.create(role_id: gv.id, user_id: ua.id,
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