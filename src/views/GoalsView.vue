<script setup lang="ts">
import {ref} from 'vue';
import {useRouter, type Router} from 'vue-router';

const router: Router = useRouter()

const prevPage = () => {
  router.push("/height")
}

const nextPage = () => {
  router.push("/level")
}
</script>

<template>
  <div class="flex flex-col items-center justify-between w-full h-screen p-5 text-center">
    <header>
      <h1 class="mb-5 text-3xl font-bold capitalize">What is Your Goal?</h1>
      <p>You can choose more than one. Don't worry, you can always change it later.</p>
    </header>
    <div class="flex flex-col space-y-7 w-4/5">

      <div
          class="card-out bg-white rounded-xl shadow-lg p-4 transition-colors duration-300 ease-in-out hover:border-blue-500 ">
        <label class="items-center flex justify-between">
          <span class="mx-2 text-gray-700">Get Fitter</span>
          <div class="block mr-5 items-center flex justify-between content-center">
            <input type="checkbox" class="form-checkbox rounded-xl h-5 w-5 text-blue-600"/>
            <span class="checkmark"></span>
          </div>
        </label>
      </div>
      <div
          class="bg-white rounded-xl card-out shadow-lg p-4 transition-colors duration-300 ease-in-out hover:border-blue-500 ">
        <label class=" items-center flex justify-between">
          <span class="mx-2 text-gray-700">Gain Weight</span>
          <div class="block mr-5 items-center flex justify-between content-center">
            <input type="checkbox" class="form-checkbox rounded-xl h-5 w-5 text-blue-600"/>
            <span class="checkmark"></span>
          </div>
        </label>
      </div>
      <div
          class="bg-white rounded-xl card-out shadow-lg p-4 transition-colors duration-300 ease-in-out hover:border-blue-500 ">
        <label class=" items-center flex justify-between">
          <span class="mx-2 text-gray-700">Lose Weight</span>
          <div class="block mr-5 items-center flex justify-between content-center">
            <input type="checkbox" class="form-checkbox rounded-xl h-5 w-5 text-blue-600"/>
            <span class="checkmark"></span>
          </div>
        </label>
      </div>
      <div
          class="bg-white rounded-xl card-out shadow-lg p-4 transition-colors duration-300 ease-in-out hover:border-blue-500 ">
        <label class=" items-center flex justify-between">
          <span class="mx-2 text-gray-700">Building Muscles</span>
          <div class="block mr-5 items-center flex justify-between content-center">
            <input type="checkbox" class="form-checkbox rounded-xl h-5 w-5 text-blue-600"/>
            <span class="checkmark"></span>
          </div>
        </label>
      </div>
      <div
          class="bg-white rounded-xl card-out shadow-lg p-4 transition-colors duration-300 ease-in-out hover:border-blue-500 ">
        <label class=" items-center flex justify-between">
          <span class="mx-2 text-gray-700">Improving Endurance</span>
          <div class="block mr-5 items-center flex justify-between content-center">
            <input type="checkbox" class="form-checkbox rounded-xl h-5 w-5 text-blue-600"/>
            <span class="checkmark"></span>
          </div>
        </label>
      </div>
      <div
          class="bg-white rounded-xl card-out shadow-lg p-4 transition-colors duration-300 ease-in-out hover:border-blue-500 ">
        <label class=" items-center flex justify-between content-center">
          <span class="mx-2 text-gray-700">Others</span>
          <div class="block mr-5 items-center flex justify-between content-center">
            <input type="checkbox" class="form-checkbox rounded-xl h-5 w-5 text-blue-600"/>
            <span class="checkmark"></span>
          </div>

        </label>
      </div>
    </div>
    <div class="flex items-center my-5 justify-between w-full space-x-5">
      <div @click="prevPage" class="w-full p-3 text-lg font-bold text-orange-500 bg-orange-100 rounded-full">Back</div>
      <div @click="nextPage" class="w-full p-3 text-lg font-bold text-white bg-orange-500 rounded-full shadow-lg">
        Continue
      </div>
    </div>
  </div>
</template>
<style>

input[type="checkbox"]  {
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid rgb(249, 115, 22);
  position: absolute;

}
input[type="checkbox"]:checked  {
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid rgb(249, 115, 22);
  background-color: rgb(249, 115, 22);
}
.card-out:has(input[type="checkbox"]:checked) {
  border: 1px solid rgb(249, 115, 22);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.card-out input:checked ~ .checkmark:after {
  display: block;
}

.card-out .checkmark:after {
  width: 5px;
  height: 10px;
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-left: 7px;
  margin-top: -6px;
  z-index: 1;

}

</style>


