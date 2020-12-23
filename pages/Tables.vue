<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div>
  </div>
</template>
<script>
import { firebase } from '@firebase/app'
import { CardTable } from '~/components/common/index'
import '@firebase/firestore'
export default {
  layout: 'Admin',
  components: {
    CardTable
  },
  data () {
    return {
      students: []
    }
  },
  mounted () {
    firebase.firestore().collection('students').get().then((res) => {
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
        this.$store.commit('addStudent', student)
      })
    })
    console.log(this.$store.state.students)
  }

}
</script>
