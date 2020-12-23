import { firebase } from '@firebase/app'
import '@firebase/firestore'
export default {
  async fetchStudents ({ commit }, params) {
    const tempStudents = []
    await firebase.firestore().collection('students').get().then((res) => {
      res.forEach((dataStudent) => {
        const id = (dataStudent.id) ? dataStudent.id : ' '
        const birthday = (dataStudent.data().birthday) ? dataStudent.data().birthday : ' '
        const email = (dataStudent.data().email) ? dataStudent.data().email : ' '
        const mssv = (dataStudent.data().mssv) ? dataStudent.data().mssv : ' '
        const name = (dataStudent.data().name) ? dataStudent.data().name : ' '
        const phone = (dataStudent.data().phone) ? dataStudent.data().phone : ' '
        const student = {
          id, birthday, email, mssv, name, phone
        }
        // commit('ADD_STUDENT', student)
        tempStudents.push(student)
      })
      // console.log('this is temp student >>> ' + tempStudents[0].mssv)
    })
    console.log('actions bat dau goi commit student')
    commit('SET_STUDENT', tempStudents)
  },
  // Vi dataNewStudent truyen vao de update co id nen can tach rieng truong id ra
  async updateStudent ({ commit }, dataNewStudent) {
    const studentInfo = {
      // Truyen dataNewStudent phai co truong id o trong
      birthday: dataNewStudent.birthday,
      email: dataNewStudent.email,
      mssv: dataNewStudent.mssv,
      name: dataNewStudent.name,
      phone: dataNewStudent.phone
    }
    const newId = dataNewStudent.id
    await firebase.firestore().collection('students').doc(newId).set(studentInfo).catch(error => alert('Update Student error: ' + error))
  },
  async deleteStudent ({ commit }, dataDeleteStudent) {
    const deleteId = dataDeleteStudent.id
    await firebase.firestore().collection('students').doc(deleteId).delete().then(function () {
      console.log('Document successfully deleted!')
    }).catch(function (error) {
      console.error('Error removing document: ', error)
    })
  },
  async fetchProfessors ({ commit }, params) {
    const tempProfessors = []
    await firebase.firestore().collection('professors').get().then((res) => {
      res.forEach((dataProfessor) => {
        const id = (dataProfessor.id) ? dataProfessor.id : ' '
        const birthday = (dataProfessor.data().birthday) ? dataProfessor.data().birthday : ' '
        const email = (dataProfessor.data().email) ? dataProfessor.data().email : ' '
        const msgv = (dataProfessor.data().msgv) ? dataProfessor.data().msgv : ' '
        const name = (dataProfessor.data().name) ? dataProfessor.data().name : ' '
        const phone = (dataProfessor.data().phone) ? dataProfessor.data().phone : ' '
        const professor = {
          id, birthday, email, msgv, name, phone
        }
        // commit('ADD_STUDENT', student)
        // console.log(dataProfessor.data())
        tempProfessors.push(professor)
        // console.log('data lay duoc' + professor.msgv)
      })
      // console.log('this is temp student >>> ' + tempStudents[0].mssv)
    })
    console.log('actions bat dau goi commit professor')
    commit('SET_PROFESSOR', tempProfessors)
  },
  async updateProfessor ({ commit }, dataNewProfessor) {
    const professorInfo = {
      // Truyen dataNewStudent phai co truong id o trong
      birthday: dataNewProfessor.birthday,
      email: dataNewProfessor.email,
      msgv: dataNewProfessor.msgv,
      name: dataNewProfessor.name,
      phone: dataNewProfessor.phone
    }
    const newId = dataNewProfessor.id
    console.log('update pro id nay' + newId)
    await firebase.firestore().collection('professors').doc(newId).set(professorInfo).catch(error => alert('Update Professor error: ' + error))
  },
  async deleteProfessor ({ commit }, dataDeleteProfessor) {
    const deleteId = dataDeleteProfessor.id
    await firebase.firestore().collection('professors').doc(deleteId).delete().then(function () {
      console.log('Document successfully deleted!')
    }).catch(function (error) {
      console.error('Error removing document: ', error)
    })
  }
}
