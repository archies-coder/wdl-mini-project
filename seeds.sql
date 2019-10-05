INSERT INTO doct (dname, dspec, dshow) VALUES
                ('Dr. testing1', 'heart', 'Y'),
                ('Dr. Testing2', 'brain', 'Y'),
                ('Dr. Testing3', 'Kidneyy', 'N'),
                ('xyzzzz', 'Headee', 'Y'),
                ('bbb', 'dljf', 'Y'),
                ('ddd', 'cvcvcv', 'Y'),
                ('dfadaf', 'dfafdf', 'Y'),
                ('adfd', 'fdfdfd', 'Y');

INSERT INTO appt (adoctor, apatient, atime, ashow, adate) VALUES
                (1, 1, '12:12', 'Y', '2012-12-12'),
                (3, 2, '12:40', 'N', '2016-10-22'),
                (4, 3, '12:10', 'Y', '2016-12-05'),
                (4, 4, 'e', 'Y', '0000-00-00');

INSERT INTO patient (pname, paddr, psex, pshow) VALUES
                    ('mr Testing1', 'here is my home', 'm', 'Y'),
                    ('mr Testing1', 'i am here', 'f', 'Y'),
                    ('abhi', 'Delhi', 'M', 'Y'),
                    ('aaaa1', 'Noida1', 'm', 'Y'),
                    ('adfdf', 'dfd', 'f', 'Y');

INSERT INTO users (email, password) VALUES
                ('admin@admin.com', '12341234');