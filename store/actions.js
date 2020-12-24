import { firebase } from '@firebase/app'
import '@firebase/firestore'
export default {
  /*
  Students Actions
  */
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
  // Action Professpr
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
    console.log(tempProfessors)
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
  },
  /*
  Login/Logout Actions
  */
  async login ({ commit, state }, dataLogin) {
    console.log(dataLogin)
    const loginInfo = {
      username: '',
      password: '',
      role: ''
    }
    await firebase.firestore().collection('professors').where('msgv', '==', dataLogin.username).where('password', '==', dataLogin.password)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          loginInfo.username = doc.data().msgv
          loginInfo.password = doc.data().password
          if (doc.data().msgv) { loginInfo.role = 'gv' }
        })
      })
    await firebase.firestore().collection('Admin').where('username', '==', dataLogin.username).where('password', '==', dataLogin.password)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          loginInfo.username = doc.data().username
          loginInfo.password = doc.data().password
          if (doc.data().username) { loginInfo.role = 'admin' }
        })
      })
    if (loginInfo.username) {
      this.$router.push('/')
      localStorage.setItem('username', loginInfo.username)
    }
    console.log('day la login info ' + loginInfo.username)
    console.log('day la role ' + loginInfo.role)
    commit('SET_ROLE', loginInfo.role)
  },
  logout () {
    localStorage.removeItem('username')
    this.$router.push('/auth/login')
  },
  /*
  Coures Actions
  */
  async fetchCourses ({ commit }) {
    const db = firebase.firestore()
    let idfinal = null
    const listTmp = []
    let TmpStudent = null

    await db.collection('courses').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.data().idDate.forEach(async function (data) {
          const tempCourse = {
            id: doc.data().idCourses,
            name: doc.data().nameCourses,
            msgv: doc.data().msgv,
            idDate: doc.data.idDate,
            day: '',
            period: '',
            room: '',
            nameroom: '',
            giangvien: '',
            students: []
          }
          idfinal = Number(tempCourse.id) + 1
          doc.data().idStudent.forEach(async function (dataStudent) {
            const docRef = await db.collection('students').doc(dataStudent.id)
            docRef
              .get()
              .then(function (doc) {
                if (doc.exists) {
                  TmpStudent = {
                    mssv: doc.data().mssv,
                    name: doc.data().name,
                    email: doc.data().email,
                    phone: doc.data().phone
                  }
                  tempCourse.students.push(TmpStudent)
                  TmpStudent = null
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          })
          const docRefgv = await db.collection('professors').doc(doc.data().idProfessor.id)
          docRefgv
            .get()
            .then(function (doc) {
              if (doc.exists) {
                tempCourse.giangvien = doc.data().name
              }
            })
          const docRef = await db.collection('date').doc(data.id)
          docRef
            .get()
            .then(async function (doc) {
              if (doc.exists) {
                tempCourse.day = doc.data().day
                tempCourse.period = doc.data().period
                tempCourse.room = doc.data().room.id
              }
              // console.log(course_tmp.id)
              const docRefroom = await db.collection('rooms').doc(tempCourse.room)
              docRefroom
                .get()
                .then(function (doc) {
                  if (doc.exists) {
                    tempCourse.nameroom = doc.data().name
                  }
                  listTmp.push(tempCourse)
                  console.log('day la temp courses ' + tempCourse)
                }
                )
            }
            )
            .catch(function (error) {
              console.log(error)
            })
        })
      })
    })
    setTimeout(function () { commit('SET_COURSE', listTmp) }, 3000)
    // commit('SET_COURSE', listTmp)
    console.log(idfinal)
    // commit('SET_COURSE', listTmp)
  },
  /*
    Rooms Actions
  */
  async fetchRooms ({ commit }, params) {
    const tempRooms = []
    await firebase.firestore().collection('rooms').get().then((res) => {
      res.forEach((dataRooms) => {
        const id = (dataRooms.id) ? dataRooms.id : ' '
        const type = (dataRooms.data().type) ? dataRooms.data().type : ' '
        const status = (dataRooms.data().status) ? dataRooms.data().status : ' '
        const broken = (dataRooms.data().broken) ? dataRooms.data().broken : ' '
        const name = (dataRooms.data().name) ? dataRooms.data().name : ' '
        const amount = (dataRooms.data().amount) ? dataRooms.data().amount : ' '
        const room = {
          id, type, status, broken, name, amount
        }
        tempRooms.push(room)
      })
    })
    console.log('actions bat dau goi commit fetch room')
    commit('SET_ROOM', tempRooms)
  },
  async deleteRoom ({ commit }, dataDeleteRoom) {
    const deleteId = dataDeleteRoom.id
    await firebase.firestore().collection('rooms').doc(deleteId).delete().then(function () {
      console.log('Document successfully deleted!')
    }).catch(function (error) {
      console.error('Error removing document: ', error)
    })
  },
  async updateRoom ({ commit }, dataNewRoom) {
    const roomInfo = {
      // Truyen dataNewStudent phai co truong id o trong
      type: dataNewRoom.type,
      name: dataNewRoom.name,
      status: dataNewRoom.status,
      broken: dataNewRoom.broken,
      amount: dataNewRoom.amount
    }
    console.log('dang vao update' + roomInfo.status)
    const newId = dataNewRoom.id
    await firebase.firestore().collection('rooms').doc(newId).set(roomInfo).catch(error => alert('Update Room error: ' + error))
  }
}
