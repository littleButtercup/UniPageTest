function sortCourses(courses) {
  return courses.sort(function (a, b) {
    let firstPrice = a.prices[0] === null ? 0 : a.prices[0];
    let secondPrice = b.prices[0] === null ? 0 : b.prices[0];
    if (firstPrice === secondPrice) {
      firstPrice = a.prices[1] === null ? Infinity : a.prices[1];
      secondPrice = b.prices[1] === null ? Infinity : b.prices[1];
    }
    return firstPrice - secondPrice;
  });
}

exports.sortCourses = sortCourses;

function filterCourses(courses, range) {
  const leftRange = range[0] === null ? 0 : range[0];
  const rightRange = range[1] === null ? Infinity : range[1];
  return courses.filter(el => {
    const leftPrice = el.prices[0] === null ? 0 : el.prices[0];
    const rightPrice = el.prices[1] === null ? Infinity : el.prices[1];
    return (leftRange >= leftPrice && leftRange <= rightPrice) ||
      (rightRange >= leftPrice && rightRange <= rightPrice) ||
      (leftRange <= leftPrice && rightRange >= rightPrice)
  }
  );
}

exports.filterCourses = filterCourses;