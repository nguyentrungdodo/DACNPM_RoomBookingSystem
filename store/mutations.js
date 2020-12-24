
export default {
  ADD_STUDENT (state, payload) {
    state.students.push(payload)
  },
  SET_STUDENT (state, data) {
    state.students = data
  },
  SET_PROFESSOR (state, data) {
    state.professors = data
  },
  SET_COURSE (state, data) {
    state.courses = data
    // console.log('da set course thanh cong')
  },
  SET_ROOM (state, data) {
    state.rooms = data
    console.log('da set room thanh cong')
  },
  SET_ROLE (state, data) {
    state.role = data.role
    if (data.role === 'admin') { state.permission = true } else { state.permission = false }
  }
}
