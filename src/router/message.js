import PublishedMessage from '../pages/message/PublishedMessage.vue'
import PublishMessage from '../pages/message/PublishMessage.vue'

export default [
  {name: 'message', path: '/message', redirect: '/message/publishMessage', component: PublishMessage,meta: { name: '消息/通知', isTopbar: true, type: 'message' }},
  {name: 'messagePublishMessage', path: '/message/publishMessage', component: PublishMessage, meta: { name: '发布消息', type: 'message' }}, 
  {name: 'messagePublishedMessage', path: '/message/publishedMessage', component: PublishedMessage, meta: { name: '已发布消息', type: 'message' }}, 
]