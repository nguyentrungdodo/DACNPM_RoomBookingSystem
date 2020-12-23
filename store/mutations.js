
export default {
  ADD_STUDENT (state, payload) {
    state.students.push(payload)
  },
  SET_STUDENT (state, data) {
    state.students = data
  },
  SET_PROFESSOR (state, data) {
    state.professors = data
  }

}
