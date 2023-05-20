//http://127.0.0.1:5500/results.html?mbti=isfj
import { results, mbtis } from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const personalEl = document.querySelector('.personal')
const personalImgEl = document.querySelector('.personal img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})
personalEl.href = result.personalUrl
personalImgEl.src = result.personalImg