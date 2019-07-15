import { storiesOf } from '@storybook/vue'
import Button from 'C:/Source/Repos/test-storybook/components/Buttons'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" />`
  }))