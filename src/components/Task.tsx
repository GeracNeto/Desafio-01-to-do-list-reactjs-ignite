import styles from './Task.module.css'

import clsx from 'clsx'

import { useState } from 'react'

import { Trash, Check } from 'phosphor-react'

import * as Checkbox from '@radix-ui/react-checkbox'

export function Task() {

    const [checked, setCheck] = useState(false)

    function handleCheck() {
        setCheck(!checked)
    }

    return (
        <div className={styles.task}>
            <Checkbox.Root
                checked={checked}
                className={clsx(styles.checkbox,
                    { [styles.checkboxChecked]: checked },
                    { [styles.checkboxUnchecked]: !checked }
                )}
                onCheckedChange={handleCheck}
            >
                <Checkbox.Indicator className={styles.checkboxIndicator}>
                    <Check size={12} weight="bold" />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <p>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash className={styles.trash} />
        </div>
    )
}