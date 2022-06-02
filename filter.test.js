let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

const { filterCourses, sortCourses } = require('./filter.js');

test('Тест диапазона', () => {
  expect(filterCourses(courses, [null, 200]).length).toBe(7);
  expect(filterCourses(courses, [100, 350]).length).toBe(7);
  expect(filterCourses(courses, [200, null]).length).toBe(7);
  expect(filterCourses(courses, [400, 500]).length).toBe(4);
  expect(filterCourses(courses, [null, null]).length).toBe(8);
  expect(filterCourses(courses, [null, 50]).length).toBe(4);
});

test('Тест сортировки', () => {
  expect(sortCourses(courses).map((course) => course.name)).toEqual(['Courses in England', 'Courses in Russia', 'Courses in France',
    'Courses in China', 'Courses in Kazakhstan', 'Courses in Italy', 'Courses in USA', 'Courses in Germany']);
});


