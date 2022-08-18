<template>
<div>
    <div>
        {{users}}
    </div>
</div>
</template>
<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useStore } from 'vuex'
export default{
    
    setup(){
        const store=useStore()
        const users =computed(()=>{
            return store.state.users
        })
        onMounted(()=>{
            store.dispatch('getUsers')
           
            })
           return{users} 
    

    }
}
</script>

<style>
</style>