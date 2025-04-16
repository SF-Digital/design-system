# Modal Component Usage

The `Modal` component is a flexible and customizable UI element. Below is an example of how to use the `Modal` component with a customized `Header`, `Body`, `Title`, and `Footer`.

```tsx
import { Modal } from "@sf-digital-ui/react-native";
import { Button } from "@sf-digital-ui/react-native";
import { CircleCheck } from "lucide-react-native";
import { colors } from "@sf-digital-ui/tokens";
import { useState } from "react";

export const ExampleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const errorMessage = null;

  return (
    <Modal.Root open={showModal} onOpenChange={setShowModal}>
      <Modal.Header
        style={{ backgroundColor: colors.success["100"] }}
        icon={<CircleCheck color={colors.success["600"]} size={24} />}
        circularBackgroundColor={colors.success["50"]}
      />
      <Modal.Body>
        <Modal.Title>Blog Post Published</Modal.Title>
        <Modal.Description>
          {errorMessage ||
            "This blog post has been published. Team members will be able to edit this post."}
        </Modal.Description>
      </Modal.Body>
      <Modal.Footer>
        <Button.Root onPress={() => setShowModal(!showModal)}>
          <Button.Text>Continue</Button.Text>
        </Button.Root>
        <Button.Root
          variant="secondary"
          onPress={() => setShowModal(!showModal)}
        >
          <Button.Text>Close</Button.Text>
        </Button.Root>
      </Modal.Footer>
    </Modal.Root>
  );
};
```

## Key Features

- **Customizable Header**: Use the `style` prop to customize the `Header` background and other styles.
- **Dynamic Icon**: Pass any React node as the `icon` prop to display a custom icon.
- **Body Section**: Contains a `Title` and `Description` to provide content within the modal.
- **Footer Actions**: Include buttons or other actions in the `Footer` for user interaction.

## Props

### Modal.Header

| Prop                      | Type        | Description                                       |
| ------------------------- | ----------- | ------------------------------------------------- |
| `style`                   | `object`    | Custom styles for the `Header` container.         |
| `icon`                    | `ReactNode` | Icon to display in the `Header`.                  |
| `circularBackgroundColor` | `string`    | Background color for the circular icon container. |

### Modal.Body

| Prop       | Type        | Description                                             |
| ---------- | ----------- | ------------------------------------------------------- |
| `children` | `ReactNode` | Body content, typically includes Title and Description. |

### Modal.Title

| Prop    | Type     | Description                         |
| ------- | -------- | ----------------------------------- |
| `style` | `object` | Custom styles for the `Title` text. |

### Modal.Description

| Prop    | Type     | Description                               |
| ------- | -------- | ----------------------------------------- |
| `style` | `object` | Custom styles for the `Description` text. |

### Modal.Footer

| Prop       | Type        | Description                                   |
| ---------- | ----------- | --------------------------------------------- |
| `children` | `ReactNode` | Footer content, typically buttons or actions. |
