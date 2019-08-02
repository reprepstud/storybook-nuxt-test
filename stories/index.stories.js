import { storiesOf } from '@storybook/vue'
import Button from '@/components/Buttons'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }))
