export const startingStringsMap: Record<string, string> = {
  readingtabularjson: JSON.stringify({
    students: {
      student: [
        {
          name: 'Bob',
          age: 12,
          contact: {
            email: 'bob@example.com',
            phone: '+123456789',
            address: '123 Bob St, Some City',
          },
          courses: {
            course: {
              course_name: 'Math 101',
              quizzes: {
                quiz: [
                  {
                    id: 1,
                    grade: 8,
                    weight: 0.1,
                  },
                  {
                    id: 2,
                    grade: 9,
                    weight: 0.1,
                  },
                ],
              },
              midterm: {
                grade: 77,
                weight: 0.3,
              },
              final: {
                grade: 87,
                weight: 0.5,
              },
              total_score: 82.3,
              attendance: {
                total_classes: 30,
                attended_classes: 28,
                absent_classes: 2,
              },
            },
          },
          extra_curricular: {
            sports: {
              sport: [
                {
                  sport_name: 'Soccer',
                  position: 'Forward',
                  team: 'The Tigers',
                },
                {
                  sport_name: 'Basketball',
                  position: 'Guard',
                  team: 'The Eagles',
                },
              ],
            },
            clubs: {
              club: [
                {
                  club_name: 'Science Club',
                  role: 'President',
                },
                {
                  club_name: 'Drama Club',
                  role: 'Member',
                },
              ],
            },
          },
        },
        {
          name: 'Eve',
          age: 13,
          contact: {
            email: 'eve@example.com',
            phone: '+987654321',
            address: '456 Eve St, Other City',
          },
          courses: {
            course: {
              course_name: 'Math 101',
              quizzes: {
                quiz: [
                  {
                    id: 1,
                    grade: 9,
                    weight: 0.15,
                  },
                  {
                    id: 2,
                    grade: 10,
                    weight: 0.15,
                  },
                ],
              },
              midterm: {
                grade: 'AB(absent)',
                weight: 0.3,
              },
              final: {
                grade: 77,
                weight: 0.4,
              },
              total_score: 78.3,
              attendance: {
                total_classes: 30,
                attended_classes: 27,
                absent_classes: 3,
              },
            },
          },
          extra_curricular: {
            sports: {
              sport: {
                sport_name: 'Tennis',
                position: 'Singles',
                team: 'The Champions',
              },
            },
            clubs: {
              club: {
                club_name: 'Art Club',
                role: 'Vice President',
              },
            },
          },
        },
        {
          name: 'Alice',
          age: 14,
          contact: {
            email: 'alice@example.com',
            phone: '+111222333',
            address: '789 Alice St, Another City',
          },
          courses: {
            course: {
              course_name: 'Science 101',
              quizzes: {
                quiz: [
                  {
                    id: 1,
                    grade: 7,
                    weight: 0.2,
                  },
                  {
                    id: 2,
                    grade: 8,
                    weight: 0.2,
                  },
                ],
              },
              midterm: {
                grade: 85,
                weight: 0.3,
              },
              final: {
                grade: 90,
                weight: 0.5,
              },
              total_score: 84.7,
              attendance: {
                total_classes: 30,
                attended_classes: 29,
                absent_classes: 1,
              },
            },
          },
          extra_curricular: {
            sports: {
              sport: {
                sport_name: 'Swimming',
                position: 'Freestyle',
                team: 'Blue Sharks',
              },
            },
            clubs: {
              club: [
                {
                  club_name: 'Chess Club',
                  role: 'Member',
                },
                {
                  club_name: 'Literature Club',
                  role: 'Secretary',
                },
              ],
            },
          },
        },
      ],
    },
  }, null, 2),
  readingtabularxml: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<students>
  <student>
    <name>Bob</name>
    <age>12</age>
    <contact>
      <email>bob@example.com</email>
      <phone>+123456789</phone>
      <address>123 Bob St, Some City</address>
    </contact>
    <courses>
      <course>
        <course_name>Math 101</course_name>
        <quizzes>
          <quiz>
            <id>1</id>
            <grade>8</grade>
            <weight>0.1</weight>
          </quiz>
          <quiz>
            <id>2</id>
            <grade>9</grade>
            <weight>0.1</weight>
          </quiz>
        </quizzes>
        <midterm>
          <grade>77</grade>
          <weight>0.3</weight>
        </midterm>
        <final>
          <grade>87</grade>
          <weight>0.5</weight>
        </final>
        <total_score>82.3</total_score>
        <attendance>
          <total_classes>30</total_classes>
          <attended_classes>28</attended_classes>
          <absent_classes>2</absent_classes>
        </attendance>
      </course>
    </courses>
    <extra_curricular>
      <sports>
        <sport>
          <sport_name>Soccer</sport_name>
          <position>Forward</position>
          <team>The Tigers</team>
        </sport>
        <sport>
          <sport_name>Basketball</sport_name>
          <position>Guard</position>
          <team>The Eagles</team>
        </sport>
      </sports>
      <clubs>
        <club>
          <club_name>Science Club</club_name>
          <role>President</role>
        </club>
        <club>
          <club_name>Drama Club</club_name>
          <role>Member</role>
        </club>
      </clubs>
    </extra_curricular>
  </student>
  <student>
    <name>Eve</name>
    <age>13</age>
    <contact>
      <email>eve@example.com</email>
      <phone>+987654321</phone>
      <address>456 Eve St, Other City</address>
    </contact>
    <courses>
      <course>
        <course_name>Math 101</course_name>
        <quizzes>
          <quiz>
            <id>1</id>
            <grade>9</grade>
            <weight>0.15</weight>
          </quiz>
          <quiz>
            <id>2</id>
            <grade>10</grade>
            <weight>0.15</weight>
          </quiz>
        </quizzes>
        <midterm>
          <grade>AB(absent)</grade> <!--The student was absent for the midterm exam.-->
          <weight>0.3</weight>
        </midterm>
        <final>
          <grade>77</grade>
          <weight>0.4</weight>
        </final>
        <total_score>78.3</total_score>
        <attendance>
          <total_classes>30</total_classes>
          <attended_classes>27</attended_classes>
          <absent_classes>3</absent_classes>
        </attendance>
      </course>
    </courses>
    <extra_curricular>
      <sports>
        <sport>
          <sport_name>Tennis</sport_name>
          <position>Singles</position>
          <team>The Champions</team>
        </sport>
      </sports>
      <clubs>
        <club>
          <club_name>Art Club</club_name>
          <role>Vice President</role>
        </club>
      </clubs>
    </extra_curricular>
  </student>
  <student>
    <name>Alice</name>
    <age>14</age>
    <contact>
      <email>alice@example.com</email>
      <phone>+111222333</phone>
      <address>789 Alice St, Another City</address>
    </contact>
    <courses>
      <course>
        <course_name>Science 101</course_name>
        <quizzes>
          <quiz>
            <id>1</id>
            <grade>7</grade>
            <weight>0.2</weight>
          </quiz>
          <quiz>
            <id>2</id>
            <grade>8</grade>
            <weight>0.2</weight>
          </quiz>
        </quizzes>
        <midterm>
          <grade>85</grade>
          <weight>0.3</weight>
        </midterm>
        <final>
          <grade>90</grade>
          <weight>0.5</weight>
        </final>
        <total_score>84.7</total_score>
        <attendance>
          <total_classes>30</total_classes>
          <attended_classes>29</attended_classes>
          <absent_classes>1</absent_classes>
        </attendance>
      </course>
    </courses>
    <extra_curricular>
      <sports>
        <sport>
          <sport_name>Swimming</sport_name>
          <position>Freestyle</position>
          <team>Blue Sharks</team>
        </sport>
      </sports>
      <clubs>
        <club>
          <club_name>Chess Club</club_name>
          <role>Member</role>
        </club>
        <club>
          <club_name>Literature Club</club_name>
          <role>Secretary</role>
        </club>
      </clubs>
    </extra_curricular>
  </student>
</students>`,
  readingtabulartoml: `[students]

[[students.student]]
name = "Bob"
age = 12

[students.student.contact]
email = "bob@example.com"
phone = "+123456789"
address = "123 Bob St, Some City"

[students.student.courses]

[students.student.courses.course]
course_name = "Math 101"
total_score = 82.3

[students.student.courses.course.quizzes]

[[students.student.courses.course.quizzes.quiz]]
id = 1
grade = 8.0
weight = 0.1

[[students.student.courses.course.quizzes.quiz]]
id = 2
grade = 9.0
weight = 0.1

[students.student.courses.course.midterm]
grade = 77.0
weight = 0.3

[students.student.courses.course.final]
grade = 87.0
weight = 0.5

[students.student.courses.course.attendance]
total_classes = 30
attended_classes = 28
absent_classes = 2

[students.student.extra_curricular]

[students.student.extra_curricular.sports]

[[students.student.extra_curricular.sports.sport]]
sport_name = "Soccer"
position = "Forward"
team = "The Tigers"

[[students.student.extra_curricular.sports.sport]]
sport_name = "Basketball"
position = "Guard"
team = "The Eagles"

[students.student.extra_curricular.clubs]

[[students.student.extra_curricular.clubs.club]]
club_name = "Science Club"
role = "President"

[[students.student.extra_curricular.clubs.club]]
club_name = "Drama Club"
role = "Member"

[[students.student]]
name = "Eve"
age = 13

[students.student.contact]
email = "eve@example.com"
phone = "+987654321"
address = "456 Eve St, Other City"

[students.student.courses]

[students.student.courses.course]
course_name = "Math 101"
total_score = 78.3

[students.student.courses.course.quizzes]

[[students.student.courses.course.quizzes.quiz]]
id = 1
grade = 9.0
weight = 0.15

[[students.student.courses.course.quizzes.quiz]]
id = 2
grade = 10.0
weight = 0.15

[students.student.courses.course.midterm]
grade = "AB(absent)"   # The student was absent for the midterm exam.
weight = 0.3

[students.student.courses.course.final]
grade = 77.0
weight = 0.4

[students.student.courses.course.attendance]
total_classes = 30
attended_classes = 27
absent_classes = 3

[students.student.extra_curricular]

[students.student.extra_curricular.sports]

[students.student.extra_curricular.sports.sport]
sport_name = "Tennis"
position = "Singles"
team = "The Champions"

[students.student.extra_curricular.clubs]

[students.student.extra_curricular.clubs.club]
club_name = "Art Club"
role = "Vice President"

[[students.student]]
name = "Alice"
age = 14

[students.student.contact]
email = "alice@example.com"
phone = "+111222333"
address = "789 Alice St, Another City"

[students.student.courses]

[students.student.courses.course]
course_name = "Science 101"
total_score = 84.7

[students.student.courses.course.quizzes]

[[students.student.courses.course.quizzes.quiz]]
id = 1
grade = 7.0
weight = 0.2

[[students.student.courses.course.quizzes.quiz]]
id = 2
grade = 8.0
weight = 0.2

[students.student.courses.course.midterm]
grade = 85.0
weight = 0.3

[students.student.courses.course.final]
grade = 90.0
weight = 0.5

[students.student.courses.course.attendance]
total_classes = 30
attended_classes = 29
absent_classes = 1

[students.student.extra_curricular]

[students.student.extra_curricular.sports]

[students.student.extra_curricular.sports.sport]
sport_name = "Swimming"
position = "Freestyle"
team = "Blue Sharks"

[students.student.extra_curricular.clubs]

[[students.student.extra_curricular.clubs.club]]
club_name = "Chess Club"
role = "Member"

[[students.student.extra_curricular.clubs.club]]
club_name = "Literature Club"
role = "Secretary"`,
  readingtabularyaml: `students:
  student:
    - name: Bob
      age: 12
      contact:
        email: bob@example.com
        phone: '+123456789'
        address: 123 Bob St, Some City
      courses:
        course:
          course_name: Math 101
          quizzes:
            quiz:
              - id: 1
                grade: 8
                weight: 0.1
              - id: 2
                grade: 9
                weight: 0.1
          midterm:
            grade: 77
            weight: 0.3
          final:
            grade: 87
            weight: 0.5
          total_score: 82.3
          attendance:
            total_classes: 30
            attended_classes: 28
            absent_classes: 2
      extra_curricular:
        sports:
          sport:
            - sport_name: Soccer
              position: Forward
              team: The Tigers
            - sport_name: Basketball
              position: Guard
              team: The Eagles
        clubs:
          club:
            - club_name: Science Club
              role: President
            - club_name: Drama Club
              role: Member
    - name: Eve
      age: 13
      contact:
        email: eve@example.com
        phone: '+987654321'
        address: 456 Eve St, Other City
      courses:
        course:
          course_name: Math 101
          quizzes:
            quiz:
              - id: 1
                grade: 9
                weight: 0.15
              - id: 2
                grade: 10
                weight: 0.15
          midterm:
            grade: AB(absent)  # The student was absent for the midterm exam.
            weight: 0.3
          final:
            grade: 77
            weight: 0.4
          total_score: 78.3
          attendance:
            total_classes: 30
            attended_classes: 27
            absent_classes: 3
      extra_curricular:
        sports:
          sport:
            sport_name: Tennis
            position: Singles
            team: The Champions
        clubs:
          club:
            club_name: Art Club
            role: Vice President
    - name: Alice
      age: 14
      contact:
        email: alice@example.com
        phone: '+111222333'
        address: 789 Alice St, Another City
      courses:
        course:
          course_name: Science 101
          quizzes:
            quiz:
              - id: 1
                grade: 7
                weight: 0.2
              - id: 2
                grade: 8
                weight: 0.2
          midterm:
            grade: 85
            weight: 0.3
          final:
            grade: 90
            weight: 0.5
          total_score: 84.7
          attendance:
            total_classes: 30
            attended_classes: 29
            absent_classes: 1
      extra_curricular:
        sports:
          sport:
            sport_name: Swimming
            position: Freestyle
            team: Blue Sharks
        clubs:
          club:
            - club_name: Chess Club
              role: Member
            - club_name: Literature Club
              role: Secretary`,
  readingtabularjsonc: `{
    "students": {
      "student": [
        {
          // comments
          "name": "Bob",
          "age": 12,
          "contact": {
            "email": "bob@example.com",
            "phone": "+123456789",
            "address": "123 Bob St, Some City"
          },
          "courses": {
            "course": {
              "course_name": "Math 101",
              "quizzes": {
                "quiz": [
                  {
                    "id": 1,
                    "grade": 8,
                    "weight": 0.1
                  },
                  {
                    "id": 2,
                    "grade": 9,
                    "weight": 0.1
                  }
                ]
              },
              "midterm": {
                "grade": 77,
                "weight": 0.3
              },
              "final": {
                "grade": 87,
                "weight": 0.5
              },
              "total_score": 82.3,
              "attendance": {
                "total_classes": 30,
                "attended_classes": 28,
                "absent_classes": 2
              }
            }
          },
          "extra_curricular": {
            "sports": {
              "sport": [
                {
                  "sport_name": "Soccer",
                  "position": "Forward",
                  "team": "The Tigers"
                },
                {
                  "sport_name": "Basketball",
                  "position": "Guard",
                  "team": "The Eagles"
                }
              ]
            },
            "clubs": {
              "club": [
                {
                  "club_name": "Science Club",
                  "role": "President"
                },
                {
                  "club_name": "Drama Club",
                  "role": "Member"
                }
              ]
            }
          }
        },
        {
          "name": "Eve",
          "age": 13,
          "contact": {
            "email": "eve@example.com",
            "phone": "+987654321",
            "address": "456 Eve St, Other City"
          },
          "courses": {
            "course": {
              "course_name": "Math 101",
              "quizzes": {
                "quiz": [
                  {
                    "id": 1,
                    "grade": 9,
                    "weight": 0.15
                  },
                  {
                    "id": 2,
                    "grade": 10,
                    "weight": 0.15
                  }
                ]
              },
              "midterm": {
                "grade": "AB(absent)",
                "weight": 0.3
              },
              "final": {
                "grade": 77,
                "weight": 0.4
              },
              "total_score": 78.3,
              "attendance": {
                "total_classes": 30,
                "attended_classes": 27,
                "absent_classes": 3
              }
            }
          },
          "extra_curricular": {
            "sports": {
              "sport": {
                "sport_name": "Tennis",
                "position": "Singles",
                "team": "The Champions"
              }
            },
            "clubs": {
              "club": {
                "club_name": "Art Club",
                "role": "Vice President"
              }
            }
          }
        },
        {
          "name": "Alice",
          "age": 14,
          "contact": {
            "email": "alice@example.com",
            "phone": "+111222333",
            "address": "789 Alice St, Another City"
          },
          "courses": {
            "course": {
              "course_name": "Science 101",
              "quizzes": {
                "quiz": [
                  {
                    "id": 1,
                    "grade": 7,
                    "weight": 0.2
                  },
                  {
                    "id": 2,
                    "grade": 8,
                    "weight": 0.2
                  }
                ]
              },
              "midterm": {
                "grade": 85,
                "weight": 0.3
              },
              "final": {
                "grade": 90,
                "weight": 0.5
              },
              "total_score": 84.7,
              "attendance": {
                "total_classes": 30,
                "attended_classes": 29,
                "absent_classes": 1
              }
            }
          },
          "extra_curricular": {
            "sports": {
              "sport": {
                "sport_name": "Swimming",
                "position": "Freestyle",
                "team": "Blue Sharks"
              }
            },
            "clubs": {
              "club": [
                {
                  "club_name": "Chess Club",
                  "role": "Member"
                },
                {
                  "club_name": "Literature Club",
                  "role": "Secretary"
                }
              ]
            }
          }
        }
      ]
    }
  }`,
  readingtabularhjson: `
  students:
  {
    student:
    [
      {
        name: Bob
        age: 12
        contact:
        {
          email: bob@example.com
          phone: +123456789
          address: 123 Bob St, Some City
        }
        courses:
        {
          course:
          {
            course_name: Math 101
            quizzes:
            {
              quiz:
              [
                {
                  id: 1
                  grade: 8
                  weight: 0.1
                }
                {
                  id: 2
                  grade: 9
                  weight: 0.1
                }
              ]
            }
            midterm:
            {
              grade: 77
              weight: 0.3
            }
            final:
            {
              grade: 87
              weight: 0.5
            }
            total_score: 82.3
            attendance:
            {
              total_classes: 30
              attended_classes: 28
              absent_classes: 2
            }
          }
        }
        extra_curricular:
        {
          sports:
          {
            sport:
            [
              {
                sport_name: Soccer
                position: Forward
                team: The Tigers
              }
              {
                sport_name: Basketball
                position: Guard
                team: The Eagles
              }
            ]
          }
          clubs:
          {
            club:
            [
              {
                club_name: Science Club
                role: President
              }
              {
                club_name: Drama Club
                role: Member
              }
            ]
          }
        }
      }
      {
        name: Eve
        age: 13
        contact:
        {
          email: eve@example.com
          phone: +987654321
          address: 456 Eve St, Other City
        }
        courses:
        {
          course:
          {
            course_name: Math 101
            quizzes:
            {
              quiz:
              [
                {
                  id: 1
                  grade: 9
                  weight: 0.15
                }
                {
                  id: 2
                  grade: 10
                  weight: 0.15
                }
              ]
            }
            midterm:
            {
              grade: AB(absent) // The student was absent for the midterm exam.
              weight: 0.3
            }
            final:
            {
              grade: 77
              weight: 0.4
            }
            total_score: 78.3
            attendance:
            {
              total_classes: 30
              attended_classes: 27
              absent_classes: 3
            }
          }
        }
        extra_curricular:
        {
          sports:
          {
            sport:
            {
              sport_name: Tennis
              position: Singles
              team: The Champions
            }
          }
          clubs:
          {
            club:
            {
              club_name: Art Club
              role: Vice President
            }
          }
        }
      }
      {
        name: Alice
        age: 14
        contact:
        {
          email: alice@example.com
          phone: +111222333
          address: 789 Alice St, Another City
        }
        courses:
        {
          course:
          {
            course_name: Science 101
            quizzes:
            {
              quiz:
              [
                {
                  id: 1
                  grade: 7
                  weight: 0.2
                }
                {
                  id: 2
                  grade: 8
                  weight: 0.2
                }
              ]
            }
            midterm:
            {
              grade: 85
              weight: 0.3
            }
            final:
            {
              grade: 90
              weight: 0.5
            }
            total_score: 84.7
            attendance:
            {
              total_classes: 30
              attended_classes: 29
              absent_classes: 1
            }
          }
        }
        extra_curricular:
        {
          sports:
          {
            sport:
            {
              sport_name: Swimming
              position: Freestyle
              team: Blue Sharks
            }
          }
          clubs:
          {
            club:
            [
              {
                club_name: Chess Club
                role: Member
              }
              {
                club_name: Literature Club
                role: Secretary
              }
            ]
          }
        }
      }
    ]
  }`,
  readingtabularjson5: `{
    students: {
        student: [
            {
                name: 'Bob',
                age: 12,
                contact: {
                    email: 'bob@example.com',
                    phone: '+123456789',
                    address: '123 Bob St, Some City'
                },
                courses: {
                    course: {
                        course_name: 'Math 101',
                        quizzes: {
                            quiz: [
                                {
                                    id: 1,
                                    grade: 8,
                                    weight: 0.1
                                },
                                {
                                    id: 2,
                                    grade: 9,
                                    weight: 0.1
                                }
                            ]
                        },
                        midterm: {
                            grade: 77,
                            weight: 0.3
                        },
                        final: {
                            grade: 87,
                            weight: 0.5
                        },
                        total_score: 82.3,
                        attendance: {
                            total_classes: 30,
                            attended_classes: 28,
                            absent_classes: 2
                        }
                    }
                },
                extra_curricular: {
                    sports: {
                        sport: [
                            {
                                sport_name: 'Soccer',
                                position: 'Forward',
                                team: 'The Tigers'
                            },
                            {
                                sport_name: 'Basketball',
                                position: 'Guard',
                                team: 'The Eagles'
                            }
                        ]
                    },
                    clubs: {
                        club: [
                            {
                                club_name: 'Science Club',
                                role: 'President'
                            },
                            {
                                club_name: 'Drama Club',
                                role: 'Member'
                            }
                        ]
                    }
                }
            },
            {
                name: 'Eve',
                age: 13,
                contact: {
                    email: 'eve@example.com',
                    phone: '+987654321',
                    address: '456 Eve St, Other City'
                },
                courses: {
                    course: {
                        course_name: 'Math 101',
                        quizzes: {
                            quiz: [
                                {
                                    id: 1,
                                    grade: 9,
                                    weight: 0.15
                                },
                                {
                                    id: 2,
                                    grade: 10,
                                    weight: 0.15
                                }
                            ]
                        },
                        midterm: {
                            grade: 'AB(absent)',  // The student was absent for the midterm exam.
                            weight: 0.3
                        },
                        final: {
                            grade: 77,
                            weight: 0.4
                        },
                        total_score: 78.3,
                        attendance: {
                            total_classes: 30,
                            attended_classes: 27,
                            absent_classes: 3
                        }
                    }
                },
                extra_curricular: {
                    sports: {
                        sport: {
                            sport_name: 'Tennis',
                            position: 'Singles',
                            team: 'The Champions'
                        }
                    },
                    clubs: {
                        club: {
                            club_name: 'Art Club',
                            role: 'Vice President'
                        }
                    }
                }
            },
            {
                name: 'Alice',
                age: 14,
                contact: {
                    email: 'alice@example.com',
                    phone: '+111222333',
                    address: '789 Alice St, Another City'
                },
                courses: {
                    course: {
                        course_name: 'Science 101',
                        quizzes: {
                            quiz: [
                                {
                                    id: 1,
                                    grade: 7,
                                    weight: 0.2
                                },
                                {
                                    id: 2,
                                    grade: 8,
                                    weight: 0.2
                                }
                            ]
                        },
                        midterm: {
                            grade: 85,
                            weight: 0.3
                        },
                        final: {
                            grade: 90,
                            weight: 0.5
                        },
                        total_score: 84.7,
                        attendance: {
                            total_classes: 30,
                            attended_classes: 29,
                            absent_classes: 1
                        }
                    }
                },
                extra_curricular: {
                    sports: {
                        sport: {
                            sport_name: 'Swimming',
                            position: 'Freestyle',
                            team: 'Blue Sharks'
                        }
                    },
                    clubs: {
                        club: [
                            {
                                club_name: 'Chess Club',
                                role: 'Member'
                            },
                            {
                                club_name: 'Literature Club',
                                role: 'Secretary'
                            }
                        ]
                    }
                }
            }
        ]
    }
}`,
  readingconfigjson: JSON.stringify({
    name: 'd3',
    version: '7.9.0',
    description: 'Data-Driven Documents',
    homepage: 'd3js.org',
    repository: {
      type: 'git',
      url: 'github.com/d3/d3.git',
    },
    keywords: [
      'd3',
      'dom',
      'visualization',
      'svg',
      'animation',
      'canvas',
    ],
    license: 'ISC',
    author: {
      firstname: 'Mike',
      lastname: 'Bostock',
    },
    type: 'module',
    files: [
      'dist/d3.js',
      'dist/d3.min.js',
      'src/**/*.js',
    ],
    module: 'src/index.js',
    main: 'src/index.js',
    jsdelivr: 'dist/d3.min.js',
    unpkg: 'dist/d3.min.js',
    exports: {
      umd: './dist/d3.min.js',
      default: './src/index.js',
    },
    dependencies: {
      'd3-array': '^3.2.4',
      'd3-axis': '^3.0.0',
      'd3-brush': '^3.0.0',
      'd3-chord': '^3.0.1',
      'd3-color': '^3.1.0',
      'd3-contour': '^4.0.2',
      'd3-delaunay': '^6.0.4',
      'd3-dispatch': '^3.0.1',
      'd3-drag': '^3.0.0',
      'd3-dsv': '^3.0.1',
      'd3-ease': '^3.0.1',
      'd3-fetch': '^3.0.1',
      'd3-force': '^3.0.0',
      'd3-format': '^3.1.0',
      'd3-geo': '^3.1.1',
      'd3-hierarchy': '^3.1.2',
      'd3-interpolate': '^3.0.1',
      'd3-path': '^3.1.0',
      'd3-polygon': '^3.0.1',
      'd3-quadtree': '^3.0.1',
      'd3-random': '^3.0.1',
      'd3-scale': '^4.0.2',
      'd3-scale-chromatic': '^3.1.0',
      'd3-selection': '^3.0.0',
      'd3-shape': '^3.2.0',
      'd3-time': '^3.1.0',
      'd3-time-format': '^4.1.0',
      'd3-timer': '^3.0.1',
      'd3-transition': '^3.0.1',
      'd3-zoom': '^3.0.0',
    },
    devDependencies: {
      '@observablehq/plot': '^0.6.7',
      '@observablehq/runtime': '^5.7.3',
      '@rollup/plugin-json': '^6.1.0',
      '@rollup/plugin-node-resolve': '^15.2.3',
      '@rollup/plugin-terser': '^0.4.0',
      eslint: '^8.57.0',
      mocha: '^10.3.0',
      rollup: '^3.29.4',
      'topojson-client': '^3.1.0',
      vitepress: '^1.4.0',
    },
    scripts: {
      prepublishOnly: 'rm -rf dist && rollup -c',
      postpublish: 'git push && git push --tags',
      'docs/dev': 'node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs',
      'docs/build': './prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs',
      'docs/preview': 'vitepress preview docs',
    },
    engines: {
      node: '>=12',
    },
  }, null, 2),
  readingconfigxml: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <name>d3</name>
  <version>7.9.0</version> 
  <description>Data-Driven Documents</description>
  <homepage>d3js.org</homepage>
  <repository>
    <type>git</type>
    <url>github.com/d3/d3.git</url>
  </repository>
  <keywords>d3</keywords>
  <keywords>dom</keywords>
  <keywords>visualization</keywords>
  <keywords>svg</keywords>
  <keywords>animation</keywords>
  <keywords>canvas</keywords>
  <license>ISC</license>
  <author>
    <firstname>Mike</firstname>
    <lastname>Bostock</lastname>
  </author>
  <type>module</type>
  <files>dist/d3.js</files>
  <files>dist/d3.min.js</files>
  <files>src/**/*.js</files>
  <module>src/index.js</module>
  <main>src/index.js</main>
  <jsdelivr>dist/d3.min.js</jsdelivr>
  <unpkg>dist/d3.min.js</unpkg>
  <exports>
    <umd>./dist/d3.min.js</umd>
    <default>./src/index.js</default>
  </exports>
  <dependencies>
    <d3-array>^3.2.4</d3-array>
    <d3-axis>^3.0.0</d3-axis>
    <d3-brush>^3.0.0</d3-brush>
    <d3-chord>^3.0.1</d3-chord>
    <d3-color>^3.1.0</d3-color>
    <d3-contour>^4.0.2</d3-contour>
    <d3-delaunay>^6.0.4</d3-delaunay>  <!--this version might have compatibility issues-->
    <d3-dispatch>^3.0.1</d3-dispatch>
    <d3-drag>^3.0.0</d3-drag>
    <d3-dsv>^3.0.1</d3-dsv>
    <d3-ease>^3.0.1</d3-ease>
    <d3-fetch>^3.0.1</d3-fetch>
    <d3-force>^3.0.0</d3-force>
    <d3-format>^3.1.0</d3-format>
    <d3-geo>^3.1.1</d3-geo>
    <d3-hierarchy>^3.1.2</d3-hierarchy>
    <d3-interpolate>^3.0.1</d3-interpolate>
    <d3-path>^3.1.0</d3-path>
    <d3-polygon>^3.0.1</d3-polygon>
    <d3-quadtree>^3.0.1</d3-quadtree>
    <d3-random>^3.0.1</d3-random>
    <d3-scale>^4.0.2</d3-scale>
    <d3-scale-chromatic>^3.1.0</d3-scale-chromatic>
    <d3-selection>^3.0.0</d3-selection>
    <d3-shape>^3.2.0</d3-shape>
    <d3-time>^3.1.0</d3-time>
    <d3-time-format>^4.1.0</d3-time-format>
    <d3-timer>^3.0.1</d3-timer>
    <d3-transition>^3.0.1</d3-transition>
    <d3-zoom>^3.0.0</d3-zoom>
  </dependencies>
  <devDependencies>
    <_x0040_observablehq_x002F_plot>^0.6.7</_x0040_observablehq_x002F_plot>
    <_x0040_observablehq_x002F_runtime>^5.7.3</_x0040_observablehq_x002F_runtime>
    <_x0040_rollup_x002F_plugin-json>^6.1.0</_x0040_rollup_x002F_plugin-json>
    <_x0040_rollup_x002F_plugin-node-resolve>^15.2.3</_x0040_rollup_x002F_plugin-node-resolve>
    <_x0040_rollup_x002F_plugin-terser>^0.4.0</_x0040_rollup_x002F_plugin-terser>
    <eslint>^8.57.0</eslint>
    <mocha>^10.3.0</mocha>
    <rollup>^3.29.4</rollup>
    <topojson-client>^3.1.0</topojson-client>
    <vitepress>^1.4.0</vitepress>
  </devDependencies>
  <scripts>
    <prepublishOnly>rm -rf dist && rollup -c</prepublishOnly>
    <postpublish>git push && git push --tags</postpublish>
    <docs/dev>node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs</docs/dev>
    <docs/build>./prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs</docs/build>
    <docs/preview>vitepress preview docs</docs/preview>
  </scripts>
  <engines>
    <node> >=12</node>
  </engines>
</root>`,
  readingconfigtoml: `name = "d3"
version = "7.9.0"
description = "Data-Driven Documents"
homepage = "d3js.org"
keywords = ["d3", "dom", "visualization", "svg", "animation", "canvas"]
license = "ISC"
type = "module"
files = ["dist/d3.js", "dist/d3.min.js", "src/**/*.js"]
module = "src/index.js"
main = "src/index.js"
jsdelivr = "dist/d3.min.js"
unpkg = "dist/d3.min.js"

[repository]
type = "git"
url = "github.com/d3/d3.git"

[author]
firstname = "Mike"
lastname = "Bostock"

[exports]
umd = "./dist/d3.min.js"
default = "./src/index.js"

[dependencies]
d3-array = "^3.2.4"
d3-axis = "^3.0.0"
d3-brush = "^3.0.0"
d3-chord = "^3.0.1"
d3-color = "^3.1.0"
d3-contour = "^4.0.2"
d3-delaunay = "^6.0.4" # this version might have compatibility issues
d3-dispatch = "^3.0.1"
d3-drag = "^3.0.0"
d3-dsv = "^3.0.1"
d3-ease = "^3.0.1"
d3-fetch = "^3.0.1"
d3-force = "^3.0.0"
d3-format = "^3.1.0"
d3-geo = "^3.1.1"
d3-hierarchy = "^3.1.2"
d3-interpolate = "^3.0.1"
d3-path = "^3.1.0"
d3-polygon = "^3.0.1"
d3-quadtree = "^3.0.1"
d3-random = "^3.0.1"
d3-scale = "^4.0.2"
d3-scale-chromatic = "^3.1.0"
d3-selection = "^3.0.0"
d3-shape = "^3.2.0"
d3-time = "^3.1.0"
d3-time-format = "^4.1.0"
d3-timer = "^3.0.1"
d3-transition = "^3.0.1"
d3-zoom = "^3.0.0"

[devDependencies]
@observablehq/plot = "^0.6.7"
@observablehq/runtime = "^5.7.3"
@rollup/plugin-json = "^6.1.0"
@rollup/plugin-node-resolve = "^15.2.3"
@rollup/plugin-terser = "^0.4.0"
eslint = "^8.57.0"
mocha = "^10.3.0"
rollup = "^3.29.4"
topojson-client = "^3.1.0"
vitepress = "^1.4.0"

[scripts]
prepublishOnly = "rm -rf dist && rollup -c"
postpublish = "git push && git push --tags"
docs/dev = "node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs"
docs/build = "./prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs"
docs/preview = "vitepress preview docs"

[engines]
node = ">=12"`,
  readingconfigyaml: `
  name: d3
  version: 7.9.0
  description: 'Data-Driven Documents'
  homepage: d3js.org
  repository:
    type: git
    url: github.com/d3/d3.git
  keywords:
    - d3
    - dom
    - visualization
    - svg
    - animation
    - canvas
  license: ISC
  author:
    firstname: Mike
    lastname:  Bostock
  type: module
  files:
    - dist/d3.js
    - dist/d3.min.js
    - 'src/**/*.js'
  module: src/index.js
  main: src/index.js
  jsdelivr: dist/d3.min.js
  unpkg: dist/d3.min.js
  exports:
    umd: ./dist/d3.min.js
    default: ./src/index.js
  dependencies:
    d3-array: ^3.2.4
    d3-axis: ^3.0.0
    d3-brush: ^3.0.0
    d3-chord: ^3.0.1
    d3-color: ^3.1.0
    d3-contour: ^4.0.2
    d3-delaunay: ^6.0.4 # this version might have compatibility issues
    d3-dispatch: ^3.0.1
    d3-drag: ^3.0.0
    d3-dsv: ^3.0.1
    d3-ease: ^3.0.1
    d3-fetch: ^3.0.1
    d3-force: ^3.0.0
    d3-format: ^3.1.0
    d3-geo: ^3.1.1
    d3-hierarchy: ^3.1.2
    d3-interpolate: ^3.0.1
    d3-path: ^3.1.0
    d3-polygon: ^3.0.1
    d3-quadtree: ^3.0.1
    d3-random: ^3.0.1
    d3-scale: ^4.0.2
    d3-scale-chromatic: ^3.1.0
    d3-selection: ^3.0.0
    d3-shape: ^3.2.0
    d3-time: ^3.1.0
    d3-time-format: ^4.1.0
    d3-timer: ^3.0.1
    d3-transition: ^3.0.1
    d3-zoom: ^3.0.0
  devDependencies:
    observablehq/plot: ^0.6.7
    observablehq/runtime: ^5.7.3
    rollup/plugin-json: ^6.1.0
    rollup/plugin-node-resolve: ^15.2.3
    rollup/plugin-terser: ^0.4.0
    eslint: ^8.57.0
    mocha: ^10.3.0
    rollup: ^3.29.4
    topojson-client: ^3.1.0
    vitepress: ^1.4.0
  scripts:
    prepublishOnly: 'rm -rf dist && rollup -c'
    postpublish: 'git push && git push --tags'
    docs/dev: 'node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs'
    docs/build: './prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs'
    docs/preview: 'vitepress preview docs'
  engines:
    node: '>=12'`,
  readingconfigjsonc: JSON.stringify({
    name: 'd3',
    version: '7.9.0',
    description: 'Data-Driven Documents',
    homepage: 'd3js.org',
    repository: {
      type: 'git',
      url: 'github.com/d3/d3.git',
    },
    keywords: [
      'd3',
      'dom',
      'visualization',
      'svg',
      'animation',
      'canvas',
    ],
    license: 'ISC',
    author: {
      firstname: 'Mike',
      lastname: 'Bostock',
    },
    type: 'module',
    files: [
      'dist/d3.js',
      'dist/d3.min.js',
      'src/**/*.js',
    ],
    module: 'src/index.js',
    main: 'src/index.js',
    jsdelivr: 'dist/d3.min.js',
    unpkg: 'dist/d3.min.js',
    exports: {
      umd: './dist/d3.min.js',
      default: './src/index.js',
    },
    dependencies: {
      'd3-array': '^3.2.4',
      'd3-axis': '^3.0.0',
      'd3-brush': '^3.0.0',
      'd3-chord': '^3.0.1',
      'd3-color': '^3.1.0',
      'd3-contour': '^4.0.2',
      'd3-delaunay': '^6.0.4', // this version might have compatibility issues
      'd3-dispatch': '^3.0.1',
      'd3-drag': '^3.0.0',
      'd3-dsv': '^3.0.1',
      'd3-ease': '^3.0.1',
      'd3-fetch': '^3.0.1',
      'd3-force': '^3.0.0',
      'd3-format': '^3.1.0',
      'd3-geo': '^3.1.1',
      'd3-hierarchy': '^3.1.2',
      'd3-interpolate': '^3.0.1',
      'd3-path': '^3.1.0',
      'd3-polygon': '^3.0.1',
      'd3-quadtree': '^3.0.1',
      'd3-random': '^3.0.1',
      'd3-scale': '^4.0.2',
      'd3-scale-chromatic': '^3.1.0',
      'd3-selection': '^3.0.0',
      'd3-shape': '^3.2.0',
      'd3-time': '^3.1.0',
      'd3-time-format': '^4.1.0',
      'd3-timer': '^3.0.1',
      'd3-transition': '^3.0.1',
      'd3-zoom': '^3.0.0',
    },
    devDependencies: {
      '@observablehq/plot': '^0.6.7',
      '@observablehq/runtime': '^5.7.3',
      '@rollup/plugin-json': '^6.1.0',
      '@rollup/plugin-node-resolve': '^15.2.3',
      '@rollup/plugin-terser': '^0.4.0',
      eslint: '^8.57.0',
      mocha: '^10.3.0',
      rollup: '^3.29.4',
      'topojson-client': '^3.1.0',
      vitepress: '^1.4.0',
    },
    scripts: {
      prepublishOnly: 'rm -rf dist && rollup -c',
      postpublish: 'git push && git push --tags',
      'docs/dev': 'node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs',
      'docs/build': './prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs',
      'docs/preview': 'vitepress preview docs',
    },
    engines: {
      node: '>=12',
    },
  }, null, 2),
  readingconfigjson5: `{
    name: 'd3',
    version: '7.9.0',
    description: 'Data-Driven Documents',
    homepage: 'd3js.org',
    repository: {
        type: 'git',
        url: 'github.com/d3/d3.git'
    },
    keywords: [
        'd3',
        'dom',
        'visualization',
        'svg',
        'animation',
        'canvas'
    ],
    license: 'ISC',
    author: {
        firstname: 'Mike',
        lastname: 'Bostock'
    },
    type: 'module',
    files: [
        'dist/d3.js',
        'dist/d3.min.js',
        'src/**/*.js'
    ],
    module: 'src/index.js',
    main: 'src/index.js',
    jsdelivr: 'dist/d3.min.js',
    unpkg: 'dist/d3.min.js',
    exports: {
        umd: './dist/d3.min.js',
        default: './src/index.js'
    },
    dependencies: {
        'd3-array': '^3.2.4',
        'd3-axis': '^3.0.0',
        'd3-brush': '^3.0.0',
        'd3-chord': '^3.0.1',
        'd3-color': '^3.1.0',
        'd3-contour': '^4.0.2',
        'd3-delaunay': '^6.0.4', // this version might have compatibility issues
        'd3-dispatch': '^3.0.1',
        'd3-drag': '^3.0.0',
        'd3-dsv': '^3.0.1',
        'd3-ease': '^3.0.1',
        'd3-fetch': '^3.0.1',
        'd3-force': '^3.0.0',
        'd3-format': '^3.1.0',
        'd3-geo': '^3.1.1',
        'd3-hierarchy': '^3.1.2',
        'd3-interpolate': '^3.0.1',
        'd3-path': '^3.1.0',
        'd3-polygon': '^3.0.1',
        'd3-quadtree': '^3.0.1',
        'd3-random': '^3.0.1',
        'd3-scale': '^4.0.2',
        'd3-scale-chromatic': '^3.1.0',
        'd3-selection': '^3.0.0',
        'd3-shape': '^3.2.0',
        'd3-time': '^3.1.0',
        'd3-time-format': '^4.1.0',
        'd3-timer': '^3.0.1',
        'd3-transition': '^3.0.1',
        'd3-zoom': '^3.0.0'
    },
    devDependencies: {
        '@observablehq/plot': '^0.6.7',
        '@observablehq/runtime': '^5.7.3',
        '@rollup/plugin-json': '^6.1.0',
        '@rollup/plugin-node-resolve': '^15.2.3',
        '@rollup/plugin-terser': '^0.4.0',
        eslint: '^8.57.0',
        mocha: '^10.3.0',
        rollup: '^3.29.4',
        'topojson-client': '^3.1.0',
        vitepress: '^1.4.0'
    },
    scripts: {
        prepublishOnly: 'rm -rf dist && rollup -c',
        postpublish: 'git push && git push --tags',
        'docs/dev': 'node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs',
        'docs/build': './prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs',
        'docs/preview': 'vitepress preview docs'
    },
    engines: {
        node: '>=12'
    }
}`,
  readingconfighjson: `{
    name: d3
    version: 7.9.0
    description: Data-Driven Documents
    homepage: d3js.org
    repository:
    {
      type: git
      url: github.com/d3/d3.git
    }
    keywords:
    [
      d3
      dom
      visualization
      svg
      animation
      canvas
    ]
    license: ISC
    author:
    {
      firstname: Mike
      lastname:  Bostock
    }
    type: module
    files:
    [
      dist/d3.js
      dist/d3.min.js
      src/**/*.js
    ]
    module: src/index.js
    main: src/index.js
    jsdelivr: dist/d3.min.js
    unpkg: dist/d3.min.js
    exports:
    {
      umd: ./dist/d3.min.js
      default: ./src/index.js
    }
    dependencies:
    {
      d3-array: ^3.2.4
      d3-axis: ^3.0.0
      d3-brush: ^3.0.0
      d3-chord: ^3.0.1
      d3-color: ^3.1.0
      d3-contour: ^4.0.2
      d3-delaunay: ^6.0.4 // this version might have compatibility issues
      d3-dispatch: ^3.0.1
      d3-drag: ^3.0.0
      d3-dsv: ^3.0.1
      d3-ease: ^3.0.1
      d3-fetch: ^3.0.1
      d3-force: ^3.0.0
      d3-format: ^3.1.0
      d3-geo: ^3.1.1
      d3-hierarchy: ^3.1.2
      d3-interpolate: ^3.0.1
      d3-path: ^3.1.0
      d3-polygon: ^3.0.1
      d3-quadtree: ^3.0.1
      d3-random: ^3.0.1
      d3-scale: ^4.0.2
      d3-scale-chromatic: ^3.1.0
      d3-selection: ^3.0.0
      d3-shape: ^3.2.0
      d3-time: ^3.1.0
      d3-time-format: ^4.1.0
      d3-timer: ^3.0.1
      d3-transition: ^3.0.1
      d3-zoom: ^3.0.0
    }
    devDependencies:
    {
      @observablehq/plot: ^0.6.7
      @observablehq/runtime: ^5.7.3
      @rollup/plugin-json: ^6.1.0
      @rollup/plugin-node-resolve: ^15.2.3
      @rollup/plugin-terser: ^0.4.0
      eslint: ^8.57.0
      mocha: ^10.3.0
      rollup: ^3.29.4
      topojson-client: ^3.1.0
      vitepress: ^1.4.0
    }
    scripts:
    {
      prepublishOnly: rm -rf dist && rollup -c
      postpublish: git push && git push --tags
      docs/dev: node --experimental-network-imports node_modules/vitepress/dist/node/cli.js dev docs
      docs/build: ./prebuild.sh && node --experimental-network-imports node_modules/vitepress/dist/node/cli.js build docs
      docs/preview: vitepress preview docs
    }
    engines:
    {
      node: >=12
    }
  }`,
  modifyingconfigjson: JSON.stringify({
    name: 'vega-lite',
    author: 'Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer',
    version: '5.23.0',
    collaborators: [
      'Kanit Wongsuphasawat',
      'Dominik Moritz',
      'Arvind Satyanarayan',
      'Jeffrey Heer',
    ],
    homepage: 'ega.github.io/vega-lite/',
    description: 'Vega-Lite is a concise high-level language for interactive visualization.',
    keywords: [
      'vega',
      'chart',
      'visualization',
    ],
    main: 'build/vega-lite.js',
    unpkg: 'build/vega-lite.min.js',
    jsdelivr: 'build/vega-lite.min.js',
    module: 'build/src/index',
    types: 'build/src/index.d.ts',
    bin: {
      vl2pdf: './bin/vl2pdf',
      vl2png: './bin/vl2png',
      vl2svg: './bin/vl2svg',
      vl2vg: './bin/vl2vg',
    },
    files: [
      'bin',
      'build',
      'src',
      'vega-lite*',
      'tsconfig.json',
    ],
    scripts: {
      changelog: 'conventional-changelog -p angular -r',
      prebuild: 'yarn clean:build',
      build: 'yarn build:only',
      data: 'rsync -r node_modules/vega-datasets/data/* site/data',
      'build-editor-preview': 'scripts/build-editor-preview.sh',
      schema: 'mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode > build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/',
      renameschema: 'scripts/rename-schema.sh',
      presite: 'yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh',
      site: 'yarn site:only',
      format: 'eslint . --fix && yarn prettierbase --write',
      lint: 'eslint . && yarn prettierbase --check',
      test: 'yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn',
      release: 'release-it',
    },
    repository: {
      type: 'git',
      url: 'github.com/vega/vega-lite.git',
    },
    license: 'BSD-3-Clause',
    bugs: {
      url: 'github.com/vega/vega-lite/issues',
    },
    devDependencies: {
      ajv: '^8.17.1',
      'ajv-formats': '^3.0.1',
      cheerio: '^1.0.0',
      'conventional-changelog-cli': '^5.0.0',
      d3: '^7.9.0',
      'del-cli': '^6.0.0',
      eslint: '^8.57.0',
      'eslint-config-prettier': '^9.1.0',
      'eslint-plugin-jest': '^28.11.0',
      'eslint-plugin-prettier': '^5.2.1',
      'fast-json-stable-stringify': '~2.1.0',
      'highlight.js': '^11.11.1',
      jest: '^29.7.0',
      'jest-dev-server': '^11.0.0',
      mkdirp: '^3.0.1',
      pako: '^2.1.0',
      prettier: '^3.4.2',
      puppeteer: '^15.0.0',
      'release-it': '18.1.2',
      rollup: '^4.32.1',
      'rollup-plugin-bundle-size': '^1.0.3',
      serve: '^14.2.4',
      terser: '^5.37.0',
      'ts-jest': '^29.2.5',
      'ts-json-schema-generator': '^2.3.0',
      typescript: '~5.7.3',
      'vega-cli': '^5.31.0',
      'vega-datasets': '^2.11.0',
      'vega-embed': '^6.29.0',
      'vega-tooltip': '^0.35.2',
      'yaml-front-matter': '^4.1.1',
    },
    dependencies: {
      'json-stringify-pretty-compact': '~4.0.0',
      tslib: '~2.8.1',
      'vega-event-selector': '~3.0.1',
      'vega-expression': '~5.1.2',
      'vega-util': '~1.17.3',
      yargs: '~17.7.2',
    },
    peerDependencies: {
      vega: '^5.31.0',
    },
    engines: {
      node: '>=18',
    },
    packageManager: 'yarn@1.22.22',
  }, null, 2),
  modifyingconfigjsonc: JSON.stringify({
    name: 'vega-lite',
    author: 'Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer',
    version: '5.23.0', // make sure that the vega version specified in peerDependencies matches this value.
    collaborators: [
      'Kanit Wongsuphasawat',
      'Dominik Moritz',
      'Arvind Satyanarayan',
      'Jeffrey Heer',
    ],
    homepage: 'vega.github.io/vega-lite/',
    description: 'Vega-Lite is a concise high-level language for interactive visualization.',
    keywords: [
      'vega',
      'chart',
      'visualization',
    ],
    main: 'build/vega-lite.js',
    unpkg: 'build/vega-lite.min.js',
    jsdelivr: 'build/vega-lite.min.js',
    module: 'build/src/index',
    types: 'build/src/index.d.ts',
    bin: {
      vl2pdf: './bin/vl2pdf',
      vl2png: './bin/vl2png',
      vl2svg: './bin/vl2svg',
      vl2vg: './bin/vl2vg',
    },
    files: [
      'bin',
      'build',
      'src',
      'vega-lite*',
      'tsconfig.json',
    ],
    scripts: {
      changelog: 'conventional-changelog -p angular -r',
      prebuild: 'yarn clean:build',
      build: 'yarn build:only',
      data: 'rsync -r node_modules/vega-datasets/data/* site/data',
      'build-editor-preview': 'scripts/build-editor-preview.sh',
      schema: 'mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode > build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/',
      renameschema: 'scripts/rename-schema.sh',
      presite: 'yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh',
      site: 'yarn site:only',
      format: 'eslint . --fix && yarn prettierbase --write',
      lint: 'eslint . && yarn prettierbase --check',
      test: 'yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn',
      release: 'release-it',
    },
    repository: {
      type: 'git',
      url: 'github.com/vega/vega-lite.git',
    },
    license: 'BSD-3-Clause',
    bugs: {
      url: 'github.com/vega/vega-lite/issues',
    },
    devDependencies: {
      ajv: '^8.17.1',
      'ajv-formats': '^3.0.1',
      cheerio: '^1.0.0',
      'conventional-changelog-cli': '^5.0.0',
      d3: '^7.9.0',
      'del-cli': '^6.0.0',
      eslint: '^8.57.0',
      'eslint-config-prettier': '^9.1.0',
      'eslint-plugin-jest': '^28.11.0',
      'eslint-plugin-prettier': '^5.2.1',
      'fast-json-stable-stringify': '~2.1.0',
      'highlight.js': '^11.11.1',
      jest: '^29.7.0',
      'jest-dev-server': '^11.0.0',
      mkdirp: '^3.0.1',
      pako: '^2.1.0',
      prettier: '^3.4.2',
      puppeteer: '^15.0.0',
      'release-it': '18.1.2',
      rollup: '^4.32.1',
      'rollup-plugin-bundle-size': '^1.0.3',
      serve: '^14.2.4',
      terser: '^5.37.0',
      'ts-jest': '^29.2.5',
      'ts-json-schema-generator': '^2.3.0',
      typescript: '~5.7.3',
      'vega-cli': '^5.31.0',
      'vega-datasets': '^2.11.0',
      'vega-embed': '^6.29.0',
      'vega-tooltip': '^0.35.2',
      'yaml-front-matter': '^4.1.1',
    },
    dependencies: {
      'json-stringify-pretty-compact': '~4.0.0',
      tslib: '~2.8.1',
      'vega-event-selector': '~3.0.1',
      'vega-expression': '~5.1.2',
      'vega-util': '~1.17.3',
      yargs: '~17.7.2',
    },
    peerDependencies: {
      vega: '^5.31.0', // make sure this value matches the value of the version at the beginning.
    },
    engines: {
      node: '>=18',
    },
    packageManager: 'yarn@1.22.22',
  }, null, 2),
  modifyingconfigxml: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <name>vega-lite</name>
  <author>Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer</author>
  <version>5.23.0</version>   <!--make sure that the vega version specified in peerDependencies matches this value. -->
  <collaborators>Kanit Wongsuphasawat</collaborators>
  <collaborators>Dominik Moritz</collaborators>
  <collaborators>Arvind Satyanarayan</collaborators>
  <collaborators>Jeffrey Heer</collaborators>
  <homepage>vega.github.io/vega-lite/</homepage>
  <description>Vega-Lite is a concise high-level language for interactive visualization.</description>
  <keywords>vega</keywords>
  <keywords>chart</keywords>
  <keywords>visualization</keywords>
  <main>build/vega-lite.js</main>
  <unpkg>build/vega-lite.min.js</unpkg>
  <jsdelivr>build/vega-lite.min.js</jsdelivr>
  <module>build/src/index</module>
  <types>build/src/index.d.ts</types>
  <bin>
    <vl2pdf>./bin/vl2pdf</vl2pdf>
    <vl2png>./bin/vl2png</vl2png>
    <vl2svg>./bin/vl2svg</vl2svg>
    <vl2vg>./bin/vl2vg</vl2vg>
  </bin>
  <files>bin</files>
  <files>build</files>
  <files>src</files>
  <files>vega-lite*</files>
  <files>tsconfig.json</files>
  <scripts>
    <changelog>conventional-changelog -p angular -r</changelog>
    <prebuild>yarn clean:build</prebuild>
    <build>yarn build:only</build>
    <data>rsync -r node_modules/vega-datasets/data/* site/data</data>
    <build-editor-preview>scripts/build-editor-preview.sh</build-editor-preview>
    <schema>mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode >; build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/</schema>
    <renameschema>scripts/rename-schema.sh</renameschema>
    <presite>yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh</presite>
    <site>yarn site:only</site>
    <format>eslint . --fix && yarn prettierbase --write</format>
    <lint>eslint . && yarn prettierbase --check</lint>
    <test>yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn</test>
    <release>release-it</release>
  </scripts>
  <repository>
    <type>git</type>
    <url>github.com/vega/vega-lite.git</url>
  </repository>
  <license>BSD-3-Clause</license>
  <bugs>
    <url>github.com/vega/vega-lite/issues</url>
  </bugs>
  <devDependencies>
    <ajv>^8.17.1</ajv>
    <ajv-formats>^3.0.1</ajv-formats>
    <cheerio>^1.0.0</cheerio>
    <conventional-changelog-cli>^5.0.0</conventional-changelog-cli>
    <d3>^7.9.0</d3>
    <del-cli>^6.0.0</del-cli>
    <eslint>^8.57.0</eslint>
    <eslint-config-prettier>^9.1.0</eslint-config-prettier>
    <eslint-plugin-jest>^28.11.0</eslint-plugin-jest>
    <eslint-plugin-prettier>^5.2.1</eslint-plugin-prettier>
    <fast-json-stable-stringify>~2.1.0</fast-json-stable-stringify>
    <highlight.js>^11.11.1</highlight.js>
    <jest>^29.7.0</jest>
    <jest-dev-server>^11.0.0</jest-dev-server>
    <mkdirp>^3.0.1</mkdirp>
    <pako>^2.1.0</pako>
    <prettier>^3.4.2</prettier>
    <puppeteer>^15.0.0</puppeteer>
    <release-it>18.1.2</release-it>
    <rollup>^4.32.1</rollup>
    <rollup-plugin-bundle-size>^1.0.3</rollup-plugin-bundle-size>
    <serve>^14.2.4</serve>
    <terser>^5.37.0</terser>
    <ts-jest>^29.2.5</ts-jest>
    <ts-json-schema-generator>^2.3.0</ts-json-schema-generator>
    <typescript>~5.7.3</typescript>
    <vega-cli>^5.31.0</vega-cli>
    <vega-datasets>^2.11.0</vega-datasets>
    <vega-embed>^6.29.0</vega-embed>
    <vega-tooltip>^0.35.2</vega-tooltip>
    <yaml-front-matter>^4.1.1</yaml-front-matter>
  </devDependencies>
  <dependencies>
    <json-stringify-pretty-compact>~4.0.0</json-stringify-pretty-compact>
    <tslib>~2.8.1</tslib>
    <vega-event-selector>~3.0.1</vega-event-selector>
    <vega-expression>~5.1.2</vega-expression>
    <vega-util>~1.17.3</vega-util>
    <yargs>~17.7.2</yargs>
  </dependencies>
  <peerDependencies>
    <vega>^5.31.0</vega>  <!--make sure this value matches the value of the version at the beginning. -->
  </peerDependencies>
  <engines>
    <node>>=18</node>
  </engines>
  <packageManager>yarn@1.22.22</packageManager>
</root>`,
  modifyingconfigtoml: `name = "vega-lite"
author = "Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer"
version = "5.23.0"   # make sure that the vega version specified in peerDependencies matches this value.
collaborators = ["Kanit Wongsuphasawat", "Dominik Moritz", "Arvind Satyanarayan", "Jeffrey Heer"]
homepage = "vega.github.io/vega-lite/"
description = "Vega-Lite is a concise high-level language for interactive visualization."
keywords = ["vega", "chart", "visualization"]
main = "build/vega-lite.js"
unpkg = "build/vega-lite.min.js"
jsdelivr = "build/vega-lite.min.js"
module = "build/src/index"
types = "build/src/index.d.ts"
files = ["bin", "build", "src", "vega-lite*", "tsconfig.json"]
license = "BSD-3-Clause"
packageManager = "yarn@1.22.22"

[bin]
vl2pdf = "./bin/vl2pdf"
vl2png = "./bin/vl2png"
vl2svg = "./bin/vl2svg"
vl2vg = "./bin/vl2vg"

[scripts]
changelog = "conventional-changelog -p angular -r"
prebuild = "yarn clean:build"
build = "yarn build:only"
data = "rsync -r node_modules/vega-datasets/data/* site/data"
build-editor-preview = "scripts/build-editor-preview.sh"
schema = "mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode > build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/"
renameschema = "scripts/rename-schema.sh"
presite = "yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh"
site = "yarn site:only"
format = "eslint . --fix && yarn prettierbase --write"
lint = "eslint . && yarn prettierbase --check"
test = "yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn"
release = "release-it"

[repository]
type = "git"
url = "github.com/vega/vega-lite.git"

[bugs]
url = "github.com/vega/vega-lite/issues"

[devDependencies]
ajv = "^8.17.1"
ajv-formats = "^3.0.1"
cheerio = "^1.0.0"
conventional-changelog-cli = "^5.0.0"
d3 = "^7.9.0"
del-cli = "^6.0.0"
eslint = "^8.57.0"
eslint-config-prettier = "^9.1.0"
eslint-plugin-jest = "^28.11.0"
eslint-plugin-prettier = "^5.2.1"
fast-json-stable-stringify = "~2.1.0"
"highlight.js" = "^11.11.1"
jest = "^29.7.0"
jest-dev-server = "^11.0.0"
mkdirp = "^3.0.1"
pako = "^2.1.0"
prettier = "^3.4.2"
puppeteer = "^15.0.0"
release-it = "18.1.2"
rollup = "^4.32.1"
rollup-plugin-bundle-size = "^1.0.3"
serve = "^14.2.4"
terser = "^5.37.0"
ts-jest = "^29.2.5"
ts-json-schema-generator = "^2.3.0"
typescript = "~5.7.3"
vega-cli = "^5.31.0"
vega-datasets = "^2.11.0"
vega-embed = "^6.29.0"
vega-tooltip = "^0.35.2"
yaml-front-matter = "^4.1.1"

[dependencies]
json-stringify-pretty-compact = "~4.0.0"
tslib = "~2.8.1"
vega-event-selector = "~3.0.1"
vega-expression = "~5.1.2"
vega-util = "~1.17.3"
yargs = "~17.7.2"

[peerDependencies]
vega = "^5.31.0"   # make sure this value matches the value of the version at the beginning.

[engines]
node = ">=18"`,
  modifyingconfigyaml: `name: vega-lite
author: Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer
version: 5.23.0  # make sure that the vega version specified in peerDependencies matches this value.
collaborators:
  - Kanit Wongsuphasawat
  - Dominik Moritz
  - Arvind Satyanarayan
  - Jeffrey Heer
homepage: vega.github.io/vega-lite/
description: Vega-Lite is a concise high-level language for interactive visualization.
keywords:
  - vega
  - chart
  - visualization
main: build/vega-lite.js
unpkg: build/vega-lite.min.js
jsdelivr: build/vega-lite.min.js
module: build/src/index
types: build/src/index.d.ts
bin:
  vl2pdf: ./bin/vl2pdf
  vl2png: ./bin/vl2png
  vl2svg: ./bin/vl2svg
  vl2vg: ./bin/vl2vg
files:
  - bin
  - build
  - src
  - vega-lite*
  - tsconfig.json
scripts:
  changelog: conventional-changelog -p angular -r
  prebuild: yarn clean:build
  build: yarn build:only
  data: rsync -r node_modules/vega-datasets/data/* site/data
  build-editor-preview: scripts/build-editor-preview.sh
  schema: mkdir -p build && ts-json-schema-generator -f tsconfig.json -p
    src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode >
    build/vega-lite-schema.json && yarn renameschema && cp
    build/vega-lite-schema.json site/_data/
  renameschema: scripts/rename-schema.sh
  presite: yarn data && yarn schema && yarn build:site && yarn build:versions &&
    scripts/create-example-pages.sh
  site: yarn site:only
  format: eslint . --fix && yarn prettierbase --write
  lint: eslint . && yarn prettierbase --check
  test: yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn
  release: release-it
repository:
  type: git
  url: github.com/vega/vega-lite.git
license: BSD-3-Clause
bugs:
  url: github.com/vega/vega-lite/issues
devDependencies:
  ajv: ^8.17.1
  ajv-formats: ^3.0.1
  cheerio: ^1.0.0
  conventional-changelog-cli: ^5.0.0
  d3: ^7.9.0
  del-cli: ^6.0.0
  eslint: ^8.57.0
  eslint-config-prettier: ^9.1.0
  eslint-plugin-jest: ^28.11.0
  eslint-plugin-prettier: ^5.2.1
  fast-json-stable-stringify: ~2.1.0
  highlight.js: ^11.11.1
  jest: ^29.7.0
  jest-dev-server: ^11.0.0
  mkdirp: ^3.0.1
  pako: ^2.1.0
  prettier: ^3.4.2
  puppeteer: ^15.0.0
  release-it: 18.1.2
  rollup: ^4.32.1
  rollup-plugin-bundle-size: ^1.0.3
  serve: ^14.2.4
  terser: ^5.37.0
  ts-jest: ^29.2.5
  ts-json-schema-generator: ^2.3.0
  typescript: ~5.7.3
  vega-cli: ^5.31.0
  vega-datasets: ^2.11.0
  vega-embed: ^6.29.0
  vega-tooltip: ^0.35.2
  yaml-front-matter: ^4.1.1
dependencies:
  json-stringify-pretty-compact: ~4.0.0
  tslib: ~2.8.1
  vega-event-selector: ~3.0.1
  vega-expression: ~5.1.2
  vega-util: ~1.17.3
  yargs: ~17.7.2
peerDependencies:
  vega: ^5.31.0  # make sure this value matches the value of the version at the beginning.
engines:
  node: ">=18"
packageManager: yarn@1.22.22`,
  modifyingconfigjson5: `{
    name: 'vega-lite',
    author: 'Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer',
    version: '5.23.0',  // make sure that the vega version specified in peerDependencies matches this value.
    collaborators: [
        'Kanit Wongsuphasawat',
        'Dominik Moritz',
        'Arvind Satyanarayan',
        'Jeffrey Heer'
    ],
    homepage: 'vega.github.io/vega-lite/',
    description: 'Vega-Lite is a concise high-level language for interactive visualization.',
    keywords: [
        'vega',
        'chart',
        'visualization'
    ],
    main: 'build/vega-lite.js',
    unpkg: 'build/vega-lite.min.js',
    jsdelivr: 'build/vega-lite.min.js',
    module: 'build/src/index',
    types: 'build/src/index.d.ts',
    bin: {
        vl2pdf: './bin/vl2pdf',
        vl2png: './bin/vl2png',
        vl2svg: './bin/vl2svg',
        vl2vg: './bin/vl2vg'
    },
    files: [
        'bin',
        'build',
        'src',
        'vega-lite*',
        'tsconfig.json'
    ],
    scripts: {
        changelog: 'conventional-changelog -p angular -r',
        prebuild: 'yarn clean:build',
        build: 'yarn build:only',
        data: 'rsync -r node_modules/vega-datasets/data/* site/data',
        'build-editor-preview': 'scripts/build-editor-preview.sh',
        schema: 'mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode > build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/',
        renameschema: 'scripts/rename-schema.sh',
        presite: 'yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh',
        site: 'yarn site:only',
        format: 'eslint . --fix && yarn prettierbase --write',
        lint: 'eslint . && yarn prettierbase --check',
        test: 'yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn',
        release: 'release-it'
    },
    repository: {
        type: 'git',
        url: 'github.com/vega/vega-lite.git'
    },
    license: 'BSD-3-Clause',
    bugs: {
        url: 'github.com/vega/vega-lite/issues'
    },
    devDependencies: {
        ajv: '^8.17.1',
        'ajv-formats': '^3.0.1',
        cheerio: '^1.0.0',
        'conventional-changelog-cli': '^5.0.0',
        d3: '^7.9.0',
        'del-cli': '^6.0.0',
        eslint: '^8.57.0',
        'eslint-config-prettier': '^9.1.0',
        'eslint-plugin-jest': '^28.11.0',
        'eslint-plugin-prettier': '^5.2.1',
        'fast-json-stable-stringify': '~2.1.0',
        'highlight.js': '^11.11.1',
        jest: '^29.7.0',
        'jest-dev-server': '^11.0.0',
        mkdirp: '^3.0.1',
        pako: '^2.1.0',
        prettier: '^3.4.2',
        puppeteer: '^15.0.0',
        'release-it': '18.1.2',
        rollup: '^4.32.1',
        'rollup-plugin-bundle-size': '^1.0.3',
        serve: '^14.2.4',
        terser: '^5.37.0',
        'ts-jest': '^29.2.5',
        'ts-json-schema-generator': '^2.3.0',
        typescript: '~5.7.3',
        'vega-cli': '^5.31.0',
        'vega-datasets': '^2.11.0',
        'vega-embed': '^6.29.0',
        'vega-tooltip': '^0.35.2',
        'yaml-front-matter': '^4.1.1'
    },
    dependencies: {
        'json-stringify-pretty-compact': '~4.0.0',
        tslib: '~2.8.1',
        'vega-event-selector': '~3.0.1',
        'vega-expression': '~5.1.2',
        'vega-util': '~1.17.3',
        yargs: '~17.7.2'
    },
    peerDependencies: {
        vega: '^5.31.0' //make sure this value matches the value of the version at the beginning.
    },
    engines: {
        node: '>=18'
    },
    packageManager: 'yarn@1.22.22'
}`,
  modifyingconfighjson: `
  name: vega-lite
  author: Dominik Moritz, Kanit Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer
  version: 5.23.0   // make sure that the vega version specified in peerDependencies matches this value.
  collaborators:
  [
    Kanit Wongsuphasawat
    Dominik Moritz
    Arvind Satyanarayan
    Jeffrey Heer
  ]
  homepage: vega.github.io/vega-lite/
  description: Vega-Lite is a concise high-level language for interactive visualization.
  keywords:
  [
    vega
    chart
    visualization
  ]
  main: build/vega-lite.js
  unpkg: build/vega-lite.min.js
  jsdelivr: build/vega-lite.min.js
  module: build/src/index
  types: build/src/index.d.ts
  bin:
  {
    vl2pdf: ./bin/vl2pdf
    vl2png: ./bin/vl2png
    vl2svg: ./bin/vl2svg
    vl2vg: ./bin/vl2vg
  }
  files:
  [
    bin
    build
    src
    vega-lite*
    tsconfig.json
  ]
  scripts:
  {
    changelog: conventional-changelog -p angular -r
    prebuild: yarn clean:build
    build: yarn build:only
    data: rsync -r node_modules/vega-datasets/data/* site/data
    build-editor-preview: scripts/build-editor-preview.sh
    schema: mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode > build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/
    renameschema: scripts/rename-schema.sh
    presite: yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh
    site: yarn site:only
    format: eslint . --fix && yarn prettierbase --write
    lint: eslint . && yarn prettierbase --check
    test: yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn
    release: release-it
  }
  repository:
  {
    type: git
    url: github.com/vega/vega-lite.git
  }
  license: BSD-3-Clause
  bugs:
  {
    url: github.com/vega/vega-lite/issues
  }
  devDependencies:
  {
    ajv: ^8.17.1
    ajv-formats: ^3.0.1
    cheerio: ^1.0.0
    conventional-changelog-cli: ^5.0.0
    d3: ^7.9.0
    del-cli: ^6.0.0
    eslint: ^8.57.0
    eslint-config-prettier: ^9.1.0
    eslint-plugin-jest: ^28.11.0
    eslint-plugin-prettier: ^5.2.1
    fast-json-stable-stringify: ~2.1.0
    highlight.js: ^11.11.1
    jest: ^29.7.0
    jest-dev-server: ^11.0.0
    mkdirp: ^3.0.1
    pako: ^2.1.0
    prettier: ^3.4.2
    puppeteer: ^15.0.0
    release-it: 18.1.2
    rollup: ^4.32.1
    rollup-plugin-bundle-size: ^1.0.3
    serve: ^14.2.4
    terser: ^5.37.0
    ts-jest: ^29.2.5
    ts-json-schema-generator: ^2.3.0
    typescript: ~5.7.3
    vega-cli: ^5.31.0
    vega-datasets: ^2.11.0
    vega-embed: ^6.29.0
    vega-tooltip: ^0.35.2
    yaml-front-matter: ^4.1.1
  }
  dependencies:
  {
    json-stringify-pretty-compact: ~4.0.0
    tslib: ~2.8.1
    vega-event-selector: ~3.0.1
    vega-expression: ~5.1.2
    vega-util: ~1.17.3
    yargs: ~17.7.2
  }
  peerDependencies:
  {
    vega: ^5.31.0  //make sure this value matches the value of the version at the beginning.
  }
  engines:
  {
    node: >=18
  }
  packageManager: yarn@1.22.22`,
  modifyingtabularjson: JSON.stringify({
    movies: {
      movie: [
        {
          title: 'After Dark in Central Park',
          year: 1900,
          cast: [],
          genres: ['Silent', 'Short'],
          href: null,
          country: 'United States',
          runtime: 3,
          language: 'Silent',
          release_date: '1900-03-15',
          production_company: 'Edison Manufacturing Company',
          director: 'James H. White',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 500,
          box_office: null,
          awards: [],
        },
        {
          title: "Boarding School Girls' Pajama Parade",
          year: 1900,
          cast: [],
          genres: ['Silent', 'Short'],
          href: null,
          country: 'United States',
          runtime: 2,
          language: 'Silent',
          release_date: '1900-05-10',
          production_company: 'Edison Manufacturing Company',
          director: 'James H. White',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 450,
          box_office: null,
          awards: [],
        },
        {
          title: "Buffalo Bill's Wild West Parade",
          year: 1900,
          cast: ['Buffalo Bill (William F. Cody)'],
          genres: ['Documentary'],
          href: null,
          country: 'United States',
          runtime: 5,
          language: 'Silent',
          release_date: '1900-07-04',
          production_company: 'Edison Manufacturing Company',
          director: 'Unknown',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 600,
          box_office: null,
          awards: [],
        },
        {
          title: 'Caught',
          year: 1900,
          cast: [],
          genres: ['Drama'],
          href: null,
          country: 'United States',
          runtime: 2,
          language: 'Silent',
          release_date: '1900-02-20',
          production_company: 'Biograph Company',
          director: 'William Heise',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 400,
          box_office: null,
          awards: [],
        },
        {
          title: 'Clowns Spinning Hats',
          year: 1900,
          cast: ['Unknown Clowns'],
          genres: ['Silent', 'Comedy'],
          href: 'Clowns_Spinning_Hats',
          extract: 'Clowns Spinning Hats is a black-and-white silent film featuring clowns throwing hats back and forth to each other. It was written and produced by Lubin Films and released April 7, 1900.',
          country: 'United States',
          runtime: 3,
          language: 'Silent',
          release_date: '1900-04-07',
          production_company: 'Lubin Films',
          director: 'Unknown',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 500,
          box_office: null,
          awards: [],
        },
        {
          title: 'The Enchanted Drawing',
          year: 1900,
          cast: ['J. Stuart Blackton'],
          genres: ['Silent', 'Animation'],
          href: 'The_Enchanted_Drawing',
          extract: 'The Enchanted Drawing is a 1900 silent film directed by J. Stuart Blackton. It is best known for containing the first animated sequences recorded on standard picture film, which has led Blackton to be considered the father of American animation.',
          thumbnail_width: 320,
          thumbnail_height: 240,
          country: 'United States',
          runtime: 2,
          language: 'Silent',
          release_date: '1900-11-16',
          production_company: 'Vitagraph Studios',
          director: 'J. Stuart Blackton',
          writer: 'J. Stuart Blackton',
          cinematography: 'Unknown',
          budget: 700,
          box_office: null,
          awards: [],
        },
        {
          title: 'Feeding Sea Lions',
          year: 1900,
          cast: ['Paul Boyton'],
          genres: ['Short', 'Silent'],
          href: 'Feeding_Sea_Lions',
          extract: 'Feeding Sea Lions is a short silent film featuring Paul Boyton feeding sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding the trained sea lions, twelve in number. The sea lions follow Boyton up the steps of the pool and then follow him back into the water. One of them steals food out of the basket. The film was made by Lubin Studios on March 10, 1900.',
          country: 'United States',
          runtime: 3,
          language: 'Silent',
          release_date: '1900-03-10',
          production_company: 'Lubin Studios',
          director: 'Unknown',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 450,
          box_office: null,
          awards: [],
        },
        {
          title: 'A Trip to the Moon',
          year: 1902,
          cast: ['Georges Méliès'],
          genres: ['Sci-Fi', 'Adventure'],
          href: 'A_Trip_to_the_Moon',
          extract: 'A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French silent film directed by Georges Méliès. It is widely regarded as the first science fiction film ever made.',
          thumbnail_width: 320,
          thumbnail_height: 240,
          country: 'France',
          runtime: 14,
          language: 'Silent',
          release_date: '1902-09-01',
          production_company: 'Star Film Company',
          director: 'Georges Méliès',
          writer: 'Georges Méliès',
          cinematography: 'Georges Méliès',
          budget: 10000,
          box_office: 20000,
          awards: ['Considered a milestone in cinema history'],
        },
        {
          title: 'The Great Train Robbery',
          year: 1903,
          cast: ['Gilbert M. Anderson', 'A. C. Abadie'],
          genres: ['Western', 'Action'],
          href: 'The_Great_Train_Robbery',
          extract: 'The Great Train Robbery is a 1903 American silent short film directed by Edwin S. Porter. It is considered one of the earliest narrative films.',
          thumbnail_width: 320,
          thumbnail_height: 240,
          country: 'United States',
          runtime: 12,
          language: 'Silent',
          release_date: '1903-12-01',
          production_company: 'Edison Manufacturing Company',
          director: 'Edwin S. Porter',
          writer: 'Scott Marble',
          cinematography: 'Edwin S. Porter',
          budget: 150,
          box_office: 5000,
          awards: ['One of the earliest crime films'],
        },
      ],
    },
  }, null, 2),
  modifyingtabularjsonc: JSON.stringify({
    movies: {
      movie: [
        {
          title: 'After Dark in Central Park',
          year: 1900,
          cast: [],
          genres: ['Silent', 'Short'],
          href: null,
          country: 'United States',
          runtime: 3,
          language: 'Silent',
          release_date: '1900-03-15',
          production_company: 'Edison Manufacturing Company',
          director: 'James H. White',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 500,
          box_office: null,
          awards: [],
        },
        {
          title: "Boarding School Girls' Pajama Parade",
          year: 1900,
          cast: [],
          genres: ['Silent', 'Short'],
          href: null,
          country: 'United States',
          runtime: 2,
          language: 'Silent',
          release_date: '1900-05-10',
          production_company: 'Edison Manufacturing Company',
          director: 'James H. White',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 450,
          box_office: null,
          awards: [],
        },
        {
          title: "Buffalo Bill's Wild West Parade",
          year: 1900,
          cast: ['Buffalo Bill (William F. Cody)'],
          genres: ['Documentary'],
          href: null,
          country: 'United States',
          runtime: 5,
          language: 'Silent',
          release_date: '1900-07-04',
          production_company: 'Edison Manufacturing Company',
          director: 'Unknown',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 600,
          box_office: null,
          awards: [],
        },
        {
          title: 'Caught',
          year: 1900,
          cast: [],
          genres: ['Drama'],
          href: null,
          country: 'United States',
          runtime: 2,
          language: 'Silent',
          release_date: '1900-02-20',
          production_company: 'Biograph Company',
          director: 'William Heise',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 400,
          box_office: null,
          awards: [],
        },
        {
          title: 'Clowns Spinning Hats',
          year: 1900,
          cast: ['Unknown Clowns'],
          genres: ['Silent', 'Comedy'],
          href: 'Clowns_Spinning_Hats',
          extract: 'Clowns Spinning Hats is a black-and-white silent film featuring clowns throwing hats back and forth to each other. It was written and produced by Lubin Films and released April 7, 1900.',
          country: 'United States',
          runtime: 3,
          language: 'Silent',
          release_date: '1900-04-07',
          production_company: 'Lubin Films',
          director: 'Unknown',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 500,
          box_office: null,
          awards: [],
        },
        {
          title: 'The Enchanted Drawing',
          year: 1900,
          cast: ['J. Stuart Blackton'],
          genres: ['Silent', 'Animation'],
          href: 'The_Enchanted_Drawing',
          extract: 'The Enchanted Drawing is a 1900 silent film directed by J. Stuart Blackton. It is best known for containing the first animated sequences recorded on standard picture film, which has led Blackton to be considered the father of American animation.',
          thumbnail_width: 320,
          thumbnail_height: 240,
          country: 'United States',
          runtime: 2,
          language: 'Silent',
          release_date: '1900-11-16',
          production_company: 'Vitagraph Studios',
          director: 'J. Stuart Blackton',
          writer: 'J. Stuart Blackton',
          cinematography: 'Unknown',
          budget: 700,
          box_office: null,
          awards: [],
        },
        {
          title: 'Feeding Sea Lions',
          year: 1900,
          cast: ['Paul Boyton'],
          genres: ['Short', 'Silent'],
          href: 'Feeding_Sea_Lions',
          extract: 'Feeding Sea Lions is a short silent film featuring Paul Boyton feeding sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding the trained sea lions, twelve in number. The sea lions follow Boyton up the steps of the pool and then follow him back into the water. One of them steals food out of the basket. The film was made by Lubin Studios on March 10, 1900.',
          country: 'United States',
          runtime: 3,
          language: 'Silent',
          release_date: '1900-03-10',
          production_company: 'Lubin Studios',
          director: 'Unknown',
          writer: 'Unknown',
          cinematography: 'Unknown',
          budget: 450,
          box_office: null,
          awards: [],
        },
        {
          title: 'A Trip to the Moon',
          year: 1902, // This movie was released after 1900.
          cast: ['Georges Méliès'],
          genres: ['Sci-Fi', 'Adventure'],
          href: 'A_Trip_to_the_Moon',
          extract: 'A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French silent film directed by Georges Méliès. It is widely regarded as the first science fiction film ever made.',
          thumbnail_width: 320,
          thumbnail_height: 240,
          country: 'France',
          runtime: 14,
          language: 'Silent',
          release_date: '1902-09-01',
          production_company: 'Star Film Company',
          director: 'Georges Méliès',
          writer: 'Georges Méliès',
          cinematography: 'Georges Méliès',
          budget: 10000,
          box_office: 20000,
          awards: ['Considered a milestone in cinema history'],
        },
        {
          title: 'The Great Train Robbery',
          year: 1903, // This movie was released after 1900.
          cast: ['Gilbert M. Anderson', 'A. C. Abadie'],
          genres: ['Western', 'Action'],
          href: 'The_Great_Train_Robbery',
          extract: 'The Great Train Robbery is a 1903 American silent short film directed by Edwin S. Porter. It is considered one of the earliest narrative films.',
          thumbnail_width: 320,
          thumbnail_height: 240,
          country: 'United States',
          runtime: 12,
          language: 'Silent',
          release_date: '1903-12-01',
          production_company: 'Edison Manufacturing Company',
          director: 'Edwin S. Porter',
          writer: 'Scott Marble',
          cinematography: 'Edwin S. Porter',
          budget: 150,
          box_office: 5000,
          awards: ['One of the earliest crime films'],
        },
      ],
    },
  }, null, 2),
  modifyingtabularxml: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<movies>
  <movie>
    <title>After Dark in Central Park</title>
    <year>1900</year>
    <cast/>
    <genres>Silent</genres>
    <genres>Short</genres>
    <href/>
    <country>United States</country>
    <runtime>3</runtime>
    <language>Silent</language>
    <release_date>1900-03-15</release_date>
    <production_company>Edison Manufacturing Company</production_company>
    <director>James H. White</director>
    <writer>Unknown</writer>
    <cinematography>Unknown</cinematography>
    <budget>500</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>Boarding School Girls' Pajama Parade</title>
    <year>1900</year>
    <cast/>
    <genres>Silent</genres>
    <genres>Short</genres>
    <href/>
    <country>United States</country>
    <runtime>2</runtime>
    <language>Silent</language>
    <release_date>1900-05-10</release_date>
    <production_company>Edison Manufacturing Company</production_company>
    <director>James H. White</director>
    <writer>Unknown</writer>
    <cinematography>Unknown</cinematography>
    <budget>450</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>Buffalo Bill's Wild West Parade</title>
    <year>1900</year>
    <cast>Buffalo Bill (William F. Cody)</cast>
    <genres>Documentary</genres>
    <href/>
    <country>United States</country>
    <runtime>5</runtime>
    <language>Silent</language>
    <release_date>1900-07-04</release_date>
    <production_company>Edison Manufacturing Company</production_company>
    <director>Unknown</director>
    <writer>Unknown</writer>
    <cinematography>Unknown</cinematography>
    <budget>600</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>Caught</title>
    <year>1900</year>
    <cast/>
    <genres>Drama</genres>
    <href/>
    <country>United States</country>
    <runtime>2</runtime>
    <language>Silent</language>
    <release_date>1900-02-20</release_date>
    <production_company>Biograph Company</production_company>
    <director>William Heise</director>
    <writer>Unknown</writer>
    <cinematography>Unknown</cinematography>
    <budget>400</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>Clowns Spinning Hats</title>
    <year>1900</year>
    <cast>Unknown Clowns</cast>
    <genres>Silent</genres>
    <genres>Comedy</genres>
    <href>Clowns_Spinning_Hats</href>
    <extract>Clowns Spinning Hats is a black-and-white silent film featuring clowns throwing hats back and forth to each other. It was written and produced by Lubin Films and released April 7, 1900.</extract>
    <country>United States</country>
    <runtime>3</runtime>
    <language>Silent</language>
    <release_date>1900-04-07</release_date>
    <production_company>Lubin Films</production_company>
    <director>Unknown</director>
    <writer>Unknown</writer>
    <cinematography>Unknown</cinematography>
    <budget>500</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>The Enchanted Drawing</title>
    <year>1900</year>
    <cast>J. Stuart Blackton</cast>
    <genres>Silent</genres>
    <genres>Animation</genres>
    <href>The_Enchanted_Drawing</href>
    <extract>The Enchanted Drawing is a 1900 silent film directed by J. Stuart Blackton. It is best known for containing the first animated sequences recorded on standard picture film, which has led Blackton to be considered the father of American animation.</extract>
    <thumbnail_width>320</thumbnail_width>
    <thumbnail_height>240</thumbnail_height>
    <country>United States</country>
    <runtime>2</runtime>
    <language>Silent</language>
    <release_date>1900-11-16</release_date>
    <production_company>Vitagraph Studios</production_company>
    <director>J. Stuart Blackton</director>
    <writer>J. Stuart Blackton</writer>
    <cinematography>Unknown</cinematography>
    <budget>700</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>Feeding Sea Lions</title>
    <year>1900</year>
    <cast>Paul Boyton</cast>
    <genres>Short</genres>
    <genres>Silent</genres>
    <href>Feeding_Sea_Lions</href>
    <extract>Feeding Sea Lions is a short silent film featuring Paul Boyton feeding sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding the trained sea lions, twelve in number. The sea lions follow Boyton up the steps of the pool and then follow him back into the water. One of them steals food out of the basket. The film was made by Lubin Studios on March 10, 1900.</extract>
    <country>United States</country>
    <runtime>3</runtime>
    <language>Silent</language>
    <release_date>1900-03-10</release_date>
    <production_company>Lubin Studios</production_company>
    <director>Unknown</director>
    <writer>Unknown</writer>
    <cinematography>Unknown</cinematography>
    <budget>450</budget>
    <box_office/>
    <awards/>
  </movie>
  <movie>
    <title>A Trip to the Moon</title>
    <year>1902</year>   <!-- This movie was released after 1900. -->
    <cast>Georges Méliès</cast>
    <genres>Sci-Fi</genres>
    <genres>Adventure</genres>
    <href>A_Trip_to_the_Moon</href>
    <extract>A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French silent film directed by Georges Méliès. It is widely regarded as the first science fiction film ever made.</extract>
    <thumbnail_width>320</thumbnail_width>
    <thumbnail_height>240</thumbnail_height>
    <country>France</country>
    <runtime>14</runtime>
    <language>Silent</language>
    <release_date>1902-09-01</release_date>
    <production_company>Star Film Company</production_company>
    <director>Georges Méliès</director>
    <writer>Georges Méliès</writer>
    <cinematography>Georges Méliès</cinematography>
    <budget>10000</budget>
    <box_office>20000</box_office>
    <awards>Considered a milestone in cinema history</awards>
  </movie>
  <movie>
    <title>The Great Train Robbery</title>
    <year>1903</year>   <!-- This movie was released after 1900. -->
    <cast>Gilbert M. Anderson</cast>
    <cast>A. C. Abadie</cast>
    <genres>Western</genres>
    <genres>Action</genres>
    <href>The_Great_Train_Robbery</href>
    <extract>The Great Train Robbery is a 1903 American silent short film directed by Edwin S. Porter. It is considered one of the earliest narrative films.</extract>
    <thumbnail_width>320</thumbnail_width>
    <thumbnail_height>240</thumbnail_height>
    <country>United States</country>
    <runtime>12</runtime>
    <language>Silent</language>
    <release_date>1903-12-01</release_date>
    <production_company>Edison Manufacturing Company</production_company>
    <director>Edwin S. Porter</director>
    <writer>Scott Marble</writer>
    <cinematography>Edwin S. Porter</cinematography>
    <budget>150</budget>
    <box_office>5000</box_office>
    <awards>One of the earliest crime films</awards>
  </movie>
</movies>`,
  modifyingtabulartoml: `[movies]

[[movies.movie]]
title = "After Dark in Central Park"
year = 1900
cast = []
genres = ["Silent", "Short"]
country = "United States"
runtime = 3
language = "Silent"
release_date = "1900-03-15"
production_company = "Edison Manufacturing Company"
director = "James H. White"
writer = "Unknown"
cinematography = "Unknown"
budget = 500
awards = []

[[movies.movie]]
title = "Boarding School Girls' Pajama Parade"
year = 1900
cast = []
genres = ["Silent", "Short"]
country = "United States"
runtime = 2
language = "Silent"
release_date = "1900-05-10"
production_company = "Edison Manufacturing Company"
director = "James H. White"
writer = "Unknown"
cinematography = "Unknown"
budget = 450
awards = []

[[movies.movie]]
title = "Buffalo Bill's Wild West Parade"
year = 1900
cast = ["Buffalo Bill (William F. Cody)"]
genres = ["Documentary"]
country = "United States"
runtime = 5
language = "Silent"
release_date = "1900-07-04"
production_company = "Edison Manufacturing Company"
director = "Unknown"
writer = "Unknown"
cinematography = "Unknown"
budget = 600
awards = []

[[movies.movie]]
title = "Caught"
year = 1900
cast = []
genres = ["Drama"]
country = "United States"
runtime = 2
language = "Silent"
release_date = "1900-02-20"
production_company = "Biograph Company"
director = "William Heise"
writer = "Unknown"
cinematography = "Unknown"
budget = 400
awards = []

[[movies.movie]]
title = "Clowns Spinning Hats"
year = 1900
cast = ["Unknown Clowns"]
genres = ["Silent", "Comedy"]
href = "Clowns_Spinning_Hats"
extract = "Clowns Spinning Hats is a black-and-white silent film featuring clowns throwing hats back and forth to each other. It was written and produced by Lubin Films and released April 7, 1900."
country = "United States"
runtime = 3
language = "Silent"
release_date = "1900-04-07"
production_company = "Lubin Films"
director = "Unknown"
writer = "Unknown"
cinematography = "Unknown"
budget = 500
awards = []

[[movies.movie]]
title = "The Enchanted Drawing"
year = 1900
cast = ["J. Stuart Blackton"]
genres = ["Silent", "Animation"]
href = "The_Enchanted_Drawing"
extract = "The Enchanted Drawing is a 1900 silent film directed by J. Stuart Blackton. It is best known for containing the first animated sequences recorded on standard picture film, which has led Blackton to be considered the father of American animation."
thumbnail_width = 320
thumbnail_height = 240
country = "United States"
runtime = 2
language = "Silent"
release_date = "1900-11-16"
production_company = "Vitagraph Studios"
director = "J. Stuart Blackton"
writer = "J. Stuart Blackton"
cinematography = "Unknown"
budget = 700
awards = []

[[movies.movie]]
title = "Feeding Sea Lions"
year = 1900
cast = ["Paul Boyton"]
genres = ["Short", "Silent"]
href = "Feeding_Sea_Lions"
extract = "Feeding Sea Lions is a short silent film featuring Paul Boyton feeding sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding the trained sea lions, twelve in number. The sea lions follow Boyton up the steps of the pool and then follow him back into the water. One of them steals food out of the basket. The film was made by Lubin Studios on March 10, 1900."
country = "United States"
runtime = 3
language = "Silent"
release_date = "1900-03-10"
production_company = "Lubin Studios"
director = "Unknown"
writer = "Unknown"
cinematography = "Unknown"
budget = 450
awards = []

[[movies.movie]]
title = "A Trip to the Moon"
year = 1902   # This movie was released after 1900.
cast = ["Georges Méliès"]
genres = ["Sci-Fi", "Adventure"]
href = "A_Trip_to_the_Moon"
extract = "A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French silent film directed by Georges Méliès. It is widely regarded as the first science fiction film ever made."
thumbnail_width = 320
thumbnail_height = 240
country = "France"
runtime = 14
language = "Silent"
release_date = "1902-09-01"
production_company = "Star Film Company"
director = "Georges Méliès"
writer = "Georges Méliès"
cinematography = "Georges Méliès"
budget = 10000
box_office = 20000
awards = ["Considered a milestone in cinema history"]

[[movies.movie]]
title = "The Great Train Robbery"
year = 1903  # This movie was released after 1900.
cast = ["Gilbert M. Anderson", "A. C. Abadie"]
genres = ["Western", "Action"]
href = "The_Great_Train_Robbery"
extract = "The Great Train Robbery is a 1903 American silent short film directed by Edwin S. Porter. It is considered one of the earliest narrative films."
thumbnail_width = 320
thumbnail_height = 240
country = "United States"
runtime = 12
language = "Silent"
release_date = "1903-12-01"
production_company = "Edison Manufacturing Company"
director = "Edwin S. Porter"
writer = "Scott Marble"
cinematography = "Edwin S. Porter"
budget = 150
box_office = 5000
awards = ["One of the earliest crime films"]`,
  modifyingtabularyaml: `movies:
  movie:
    - title: After Dark in Central Park
      year: 1900
      cast: []
      genres:
        - Silent
        - Short
      href: null
      country: United States
      runtime: 3
      language: Silent
      release_date: '1900-03-15'
      production_company: Edison Manufacturing Company
      director: James H. White
      writer: Unknown
      cinematography: Unknown
      budget: 500
      box_office: null
      awards: []
    - title: Boarding School Girls' Pajama Parade
      year: 1900
      cast: []
      genres:
        - Silent
        - Short
      href: null
      country: United States
      runtime: 2
      language: Silent
      release_date: '1900-05-10'
      production_company: Edison Manufacturing Company
      director: James H. White
      writer: Unknown
      cinematography: Unknown
      budget: 450
      box_office: null
      awards: []
    - title: Buffalo Bill's Wild West Parade
      year: 1900
      cast:
        - Buffalo Bill (William F. Cody)
      genres:
        - Documentary
      href: null
      country: United States
      runtime: 5
      language: Silent
      release_date: '1900-07-04'
      production_company: Edison Manufacturing Company
      director: Unknown
      writer: Unknown
      cinematography: Unknown
      budget: 600
      box_office: null
      awards: []
    - title: Caught
      year: 1900
      cast: []
      genres:
        - Drama
      href: null
      country: United States
      runtime: 2
      language: Silent
      release_date: '1900-02-20'
      production_company: Biograph Company
      director: William Heise
      writer: Unknown
      cinematography: Unknown
      budget: 400
      box_office: null
      awards: []
    - title: Clowns Spinning Hats
      year: 1900
      cast:
        - Unknown Clowns
      genres:
        - Silent
        - Comedy
      href: Clowns_Spinning_Hats
      extract: >-
        Clowns Spinning Hats is a black-and-white silent film featuring clowns
        throwing hats back and forth to each other. It was written and produced
        by Lubin Films and released April 7, 1900.
      country: United States
      runtime: 3
      language: Silent
      release_date: '1900-04-07'
      production_company: Lubin Films
      director: Unknown
      writer: Unknown
      cinematography: Unknown
      budget: 500
      box_office: null
      awards: []
    - title: The Enchanted Drawing
      year: 1900
      cast:
        - J. Stuart Blackton
      genres:
        - Silent
        - Animation
      href: The_Enchanted_Drawing
      extract: >-
        The Enchanted Drawing is a 1900 silent film directed by J. Stuart
        Blackton. It is best known for containing the first animated sequences
        recorded on standard picture film, which has led Blackton to be
        considered the father of American animation.
      thumbnail_width: 320
      thumbnail_height: 240
      country: United States
      runtime: 2
      language: Silent
      release_date: '1900-11-16'
      production_company: Vitagraph Studios
      director: J. Stuart Blackton
      writer: J. Stuart Blackton
      cinematography: Unknown
      budget: 700
      box_office: null
      awards: []
    - title: Feeding Sea Lions
      year: 1900
      cast:
        - Paul Boyton
      genres:
        - Short
        - Silent
      href: Feeding_Sea_Lions
      extract: >-
        Feeding Sea Lions is a short silent film featuring Paul Boyton feeding
        sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding
        the trained sea lions, twelve in number. The sea lions follow Boyton up
        the steps of the pool and then follow him back into the water. One of
        them steals food out of the basket. The film was made by Lubin Studios
        on March 10, 1900.
      country: United States
      runtime: 3
      language: Silent
      release_date: '1900-03-10'
      production_company: Lubin Studios
      director: Unknown
      writer: Unknown
      cinematography: Unknown
      budget: 450
      box_office: null
      awards: []
    - title: A Trip to the Moon
      year: 1902    # This movie was released after 1900.
      cast:
        - Georges Méliès
      genres:
        - Sci-Fi
        - Adventure
      href: A_Trip_to_the_Moon
      extract: >-
        A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French
        silent film directed by Georges Méliès. It is widely regarded as the
        first science fiction film ever made.
      thumbnail_width: 320
      thumbnail_height: 240
      country: France
      runtime: 14
      language: Silent
      release_date: '1902-09-01'
      production_company: Star Film Company
      director: Georges Méliès
      writer: Georges Méliès
      cinematography: Georges Méliès
      budget: 10000
      box_office: 20000
      awards:
        - Considered a milestone in cinema history
    - title: The Great Train Robbery
      year: 1903   # This movie was released after 1900.
      cast:
        - Gilbert M. Anderson
        - A. C. Abadie
      genres:
        - Western
        - Action
      href: The_Great_Train_Robbery
      extract: >-
        The Great Train Robbery is a 1903 American silent short film directed by
        Edwin S. Porter. It is considered one of the earliest narrative films.
      thumbnail_width: 320
      thumbnail_height: 240
      country: United States
      runtime: 12
      language: Silent
      release_date: '1903-12-01'
      production_company: Edison Manufacturing Company
      director: Edwin S. Porter
      writer: Scott Marble
      cinematography: Edwin S. Porter
      budget: 150
      box_office: 5000
      awards:
        - One of the earliest crime films`,
  modifyingtabularjson5: `{
    movies: {
        movie: [
            {
                title: 'After Dark in Central Park',
                year: 1900,
                cast: [],
                genres: [
                    'Silent',
                    'Short'
                ],
                href: null,
                country: 'United States',
                runtime: 3,
                language: 'Silent',
                release_date: '1900-03-15',
                production_company: 'Edison Manufacturing Company',
                director: 'James H. White',
                writer: 'Unknown',
                cinematography: 'Unknown',
                budget: 500,
                box_office: null,
                awards: []
            },
            {
                title: "Boarding School Girls' Pajama Parade",
                year: 1900,
                cast: [],
                genres: [
                    'Silent',
                    'Short'
                ],
                href: null,
                country: 'United States',
                runtime: 2,
                language: 'Silent',
                release_date: '1900-05-10',
                production_company: 'Edison Manufacturing Company',
                director: 'James H. White',
                writer: 'Unknown',
                cinematography: 'Unknown',
                budget: 450,
                box_office: null,
                awards: []
            },
            {
                title: "Buffalo Bill's Wild West Parade",
                year: 1900,
                cast: [
                    'Buffalo Bill (William F. Cody)'
                ],
                genres: [
                    'Documentary'
                ],
                href: null,
                country: 'United States',
                runtime: 5,
                language: 'Silent',
                release_date: '1900-07-04',
                production_company: 'Edison Manufacturing Company',
                director: 'Unknown',
                writer: 'Unknown',
                cinematography: 'Unknown',
                budget: 600,
                box_office: null,
                awards: []
            },
            {
                title: 'Caught',
                year: 1900,
                cast: [],
                genres: [
                    'Drama'
                ],
                href: null,
                country: 'United States',
                runtime: 2,
                language: 'Silent',
                release_date: '1900-02-20',
                production_company: 'Biograph Company',
                director: 'William Heise',
                writer: 'Unknown',
                cinematography: 'Unknown',
                budget: 400,
                box_office: null,
                awards: []
            },
            {
                title: 'Clowns Spinning Hats',
                year: 1900,
                cast: [
                    'Unknown Clowns'
                ],
                genres: [
                    'Silent',
                    'Comedy'
                ],
                href: 'Clowns_Spinning_Hats',
                extract: 'Clowns Spinning Hats is a black-and-white silent film featuring clowns throwing hats back and forth to each other. It was written and produced by Lubin Films and released April 7, 1900.',
                country: 'United States',
                runtime: 3,
                language: 'Silent',
                release_date: '1900-04-07',
                production_company: 'Lubin Films',
                director: 'Unknown',
                writer: 'Unknown',
                cinematography: 'Unknown',
                budget: 500,
                box_office: null,
                awards: []
            },
            {
                title: 'The Enchanted Drawing',
                year: 1900,
                cast: [
                    'J. Stuart Blackton'
                ],
                genres: [
                    'Silent',
                    'Animation'
                ],
                href: 'The_Enchanted_Drawing',
                extract: 'The Enchanted Drawing is a 1900 silent film directed by J. Stuart Blackton. It is best known for containing the first animated sequences recorded on standard picture film, which has led Blackton to be considered the father of American animation.',
                thumbnail_width: 320,
                thumbnail_height: 240,
                country: 'United States',
                runtime: 2,
                language: 'Silent',
                release_date: '1900-11-16',
                production_company: 'Vitagraph Studios',
                director: 'J. Stuart Blackton',
                writer: 'J. Stuart Blackton',
                cinematography: 'Unknown',
                budget: 700,
                box_office: null,
                awards: []
            },
            {
                title: 'Feeding Sea Lions',
                year: 1900,
                cast: [
                    'Paul Boyton'
                ],
                genres: [
                    'Short',
                    'Silent'
                ],
                href: 'Feeding_Sea_Lions',
                extract: 'Feeding Sea Lions is a short silent film featuring Paul Boyton feeding sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding the trained sea lions, twelve in number. The sea lions follow Boyton up the steps of the pool and then follow him back into the water. One of them steals food out of the basket. The film was made by Lubin Studios on March 10, 1900.',
                country: 'United States',
                runtime: 3,
                language: 'Silent',
                release_date: '1900-03-10',
                production_company: 'Lubin Studios',
                director: 'Unknown',
                writer: 'Unknown',
                cinematography: 'Unknown',
                budget: 450,
                box_office: null,
                awards: []
            },
            {
                title: 'A Trip to the Moon',
                year: 1902,    // This movie was released after 1900.
                cast: [
                    'Georges Méliès'
                ],
                genres: [
                    'Sci-Fi',
                    'Adventure'
                ],
                href: 'A_Trip_to_the_Moon',
                extract: 'A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French silent film directed by Georges Méliès. It is widely regarded as the first science fiction film ever made.',
                thumbnail_width: 320,
                thumbnail_height: 240,
                country: 'France',
                runtime: 14,
                language: 'Silent',
                release_date: '1902-09-01',
                production_company: 'Star Film Company',
                director: 'Georges Méliès',
                writer: 'Georges Méliès',
                cinematography: 'Georges Méliès',
                budget: 10000,
                box_office: 20000,
                awards: [
                    'Considered a milestone in cinema history'
                ]
            },
            {
                title: 'The Great Train Robbery',
                year: 1903,    // This movie was released after 1900.
                cast: [
                    'Gilbert M. Anderson',
                    'A. C. Abadie'
                ],
                genres: [
                    'Western',
                    'Action'
                ],
                href: 'The_Great_Train_Robbery',
                extract: 'The Great Train Robbery is a 1903 American silent short film directed by Edwin S. Porter. It is considered one of the earliest narrative films.',
                thumbnail_width: 320,
                thumbnail_height: 240,
                country: 'United States',
                runtime: 12,
                language: 'Silent',
                release_date: '1903-12-01',
                production_company: 'Edison Manufacturing Company',
                director: 'Edwin S. Porter',
                writer: 'Scott Marble',
                cinematography: 'Edwin S. Porter',
                budget: 150,
                box_office: 5000,
                awards: [
                    'One of the earliest crime films'
                ]
            }
        ]
    }
}`,
  modifyingtabularhjson: `{
  movies:
  {
    movie:
    [
      {
        title: After Dark in Central Park
        year: 1900
        cast: []
        genres:
        [
          Silent
          Short
        ]
        href: null
        country: United States
        runtime: 3
        language: Silent
        release_date: 1900-03-15
        production_company: Edison Manufacturing Company
        director: James H. White
        writer: Unknown
        cinematography: Unknown
        budget: 500
        box_office: null
        awards: []
      }
      {
        title: Boarding School Girls' Pajama Parade
        year: 1900
        cast: []
        genres:
        [
          Silent
          Short
        ]
        href: null
        country: United States
        runtime: 2
        language: Silent
        release_date: 1900-05-10
        production_company: Edison Manufacturing Company
        director: James H. White
        writer: Unknown
        cinematography: Unknown
        budget: 450
        box_office: null
        awards: []
      }
      {
        title: Buffalo Bill's Wild West Parade
        year: 1900
        cast:
        [
          Buffalo Bill (William F. Cody)
        ]
        genres:
        [
          Documentary
        ]
        href: null
        country: United States
        runtime: 5
        language: Silent
        release_date: 1900-07-04
        production_company: Edison Manufacturing Company
        director: Unknown
        writer: Unknown
        cinematography: Unknown
        budget: 600
        box_office: null
        awards: []
      }
      {
        title: Caught
        year: 1900
        cast: []
        genres:
        [
          Drama
        ]
        href: null
        country: United States
        runtime: 2
        language: Silent
        release_date: 1900-02-20
        production_company: Biograph Company
        director: William Heise
        writer: Unknown
        cinematography: Unknown
        budget: 400
        box_office: null
        awards: []
      }
      {
        title: Clowns Spinning Hats
        year: 1900
        cast:
        [
          Unknown Clowns
        ]
        genres:
        [
          Silent
          Comedy
        ]
        href: Clowns_Spinning_Hats
        extract: Clowns Spinning Hats is a black-and-white silent film featuring clowns throwing hats back and forth to each other. It was written and produced by Lubin Films and released April 7, 1900.
        country: United States
        runtime: 3
        language: Silent
        release_date: 1900-04-07
        production_company: Lubin Films
        director: Unknown
        writer: Unknown
        cinematography: Unknown
        budget: 500
        box_office: null
        awards: []
      }
      {
        title: The Enchanted Drawing
        year: 1900
        cast:
        [
          J. Stuart Blackton
        ]
        genres:
        [
          Silent
          Animation
        ]
        href: The_Enchanted_Drawing
        extract: The Enchanted Drawing is a 1900 silent film directed by J. Stuart Blackton. It is best known for containing the first animated sequences recorded on standard picture film, which has led Blackton to be considered the father of American animation.
        thumbnail_width: 320
        thumbnail_height: 240
        country: United States
        runtime: 2
        language: Silent
        release_date: 1900-11-16
        production_company: Vitagraph Studios
        director: J. Stuart Blackton
        writer: J. Stuart Blackton
        cinematography: Unknown
        budget: 700
        box_office: null
        awards: []
      }
      {
        title: Feeding Sea Lions
        year: 1900
        cast:
        [
          Paul Boyton
        ]
        genres:
        [
          Short
          Silent
        ]
        href: Feeding_Sea_Lions
        extract: Feeding Sea Lions is a short silent film featuring Paul Boyton feeding sea lions at his Sea Lion Park at Coney Island. Boyton is shown feeding the trained sea lions, twelve in number. The sea lions follow Boyton up the steps of the pool and then follow him back into the water. One of them steals food out of the basket. The film was made by Lubin Studios on March 10, 1900.
        country: United States
        runtime: 3
        language: Silent
        release_date: 1900-03-10
        production_company: Lubin Studios
        director: Unknown
        writer: Unknown
        cinematography: Unknown
        budget: 450
        box_office: null
        awards: []
      }
      {
        title: A Trip to the Moon
        year: 1902    // This movie was released after 1900.
        cast:
        [
          Georges Méliès
        ]
        genres:
        [
          Sci-Fi
          Adventure
        ]
        href: A_Trip_to_the_Moon
        extract: A Trip to the Moon (French: Le Voyage dans la Lune) is a 1902 French silent film directed by Georges Méliès. It is widely regarded as the first science fiction film ever made.
        thumbnail_width: 320
        thumbnail_height: 240
        country: France
        runtime: 14
        language: Silent
        release_date: 1902-09-01
        production_company: Star Film Company
        director: Georges Méliès
        writer: Georges Méliès
        cinematography: Georges Méliès
        budget: 10000
        box_office: 20000
        awards:
        [
          Considered a milestone in cinema history
        ]
      }
      {
        title: The Great Train Robbery
        year: 1903    // This movie was released after 1900.
        cast:
        [
          Gilbert M. Anderson
          A. C. Abadie
        ]
        genres:
        [
          Western
          Action
        ]
        href: The_Great_Train_Robbery
        extract: The Great Train Robbery is a 1903 American silent short film directed by Edwin S. Porter. It is considered one of the earliest narrative films.
        thumbnail_width: 320
        thumbnail_height: 240
        country: United States
        runtime: 12
        language: Silent
        release_date: 1903-12-01
        production_company: Edison Manufacturing Company
        director: Edwin S. Porter
        writer: Scott Marble
        cinematography: Edwin S. Porter
        budget: 150
        box_office: 5000
        awards:
        [
          One of the earliest crime films
        ]
      }
    ]
  }
}`,
};
