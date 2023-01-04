export default function getListStudentIds(students) {
  // check arg 
  if (Array.isArray(students)) {
    return students.map((items) => items.id);
  }
  return [];
}
