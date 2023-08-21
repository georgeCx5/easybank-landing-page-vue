<script>
export default {
   data() {
      return {
         isHovered: false,
      }
   },
   computed: {
      getHoverState() {
         return this.isHovered ? '' : 'invisible'
      }
   },
   props: {
      wSize: {
         String,
         required: true,
      }
   }
}
</script>
<template>
   <button @mouseenter="isHovered = true" @mouseleave="isHovered = false"
      :class="` relative ${wSize} h-[44px] bg-gradient-to-br from-neo-lime-green to-neo-bright-cyan text-neo-white text-[.875rem] leading-[1.75rem] font-bold rounded-[1.375rem] overflow-hidden select-none`">
      Request Invite
      <div :class="` absolute ${getHoverState} top-0 w-full h-full bg-neo-white bg-opacity-40 pointer-events-none`"></div>
   </button>
</template>