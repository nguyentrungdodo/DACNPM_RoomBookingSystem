<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-gray-500 uppercase font-bold text-xs">
            {{ statSubtitle }}
          </h5>
          <span class="font-semibold text-xl text-gray-800">
            {{ statTitle }}
          </span>
        </div>
        <div class="relative w-auto pl-4 flex-initial">
          <div
            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
            :class="[statIconColor]"
          >
            <i :class="[statIconName]" />
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-500 mt-4">
        <span class="mr-2" :class="[statPercentColor]">
          <i
            :class="[
              statArrow === 'up' ? `fas fa-arrow-up` : `fas fa-arrow-down`,
            ]"
          />
          {{ statPercent }}%
        </span>
        <span class="whitespace-no-wrap">{{ statDescripiron }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStats',
  props: {
    statSubtitle: {
      type: String,
      default: 'Traffic'
    },
    statTitle: {
      type: String,
      default: '350,897'
    },
    statArrow: {
      default: 'up',
      validator (value) {
        // The value must match one of these strings
        return ['up', 'down'].includes(value)
      }
    },
    statPercent: {
      type: String,
      default: '3.48'
    },
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: {
      type: String,
      default: 'text-green-500'
    },
    statDescripiron: {
      type: String,
      default: 'Since last month'
    },
    statIconName: {
      type: String,
      default: 'far fa-chart-bar'
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: 'bg-red-500'
    }
  }
}
</script>
