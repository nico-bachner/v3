import styles from '@lib/styles/Design.module.css';

import { Checkbox, Input, Select, Text } from '@nico-bachner/components-react';

import { useState } from 'react';

const FormElements = () => {
    type FormData = {
        checked: boolean | undefined;
    };

    const [formData, setFormData] = useState<FormData>({
        checked: false,
    });

    return (
        <div className={styles.smallTable}>
            <Text>Checkbox</Text>
            <Checkbox
                checked={formData.checked}
                onCheckedChange={(checked) => {
                    setFormData({ checked });
                }}
                name="check"
                required={false}
            />

            <Text>Date</Text>
            <Input type="date" />

            <Text>Email</Text>
            <Input type="email" placeholder="mail@example.com" />

            <Text>Number</Text>
            <Input type="number" placeholder="21'000'000" />

            <Text>Password</Text>
            <Input type="password" placeholder="12345secret" />

            <Text>Search</Text>
            <Input type="search" placeholder="abcd" />

            <Text>Telephone</Text>
            <Input type="tel" placeholder="+12 345 678 900" />

            <Text>Text</Text>
            <Input type="text" placeholder="type something here" />

            <Text>URL</Text>
            <Input type="url" placeholder="example.com" />

            <Text>Select</Text>
            <Select.Root>
                <Select.Option value="1">Option 1</Select.Option>
                <Select.Option value="2">Option 2</Select.Option>
                <Select.Option value="3">Option 3</Select.Option>
            </Select.Root>
        </div>
    );
};

export default FormElements;
