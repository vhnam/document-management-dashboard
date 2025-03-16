'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Portal from '../Portal';
import { Menu, MenuItemProps } from '../Menu';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from '../../providers/ThemeProvider';
import { useRouter } from 'next/navigation';
import { Routes } from '../../enums/Routes';

const ProfileMenu = () => {
  const { toggleTheme } = useTheme();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalMounted, setIsPortalMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.push(Routes.LOGIN);
  };

  const menuItems: MenuItemProps[] = [
    {
      children: 'Profile',
      href: '/profile',
      onClick: () => setIsOpen(false),
    },
    {
      children: (
        <div className="flex items-center justify-between w-full">
          View mode
          <ThemeToggle shouldDisable />
        </div>
      ),
      className: 'flex items-center justify-between',
      isPlainDiv: true,
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      children: 'Logout',
      className: 'text-accent-red dark:text-accent-red',
      onClick: () => {
        setIsOpen(false);
        handleLogout();
      },
    },
  ];

  const updateDropdownPosition = useCallback(() => {
    if (!buttonRef.current || !dropdownRef.current) {
      return;
    }

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdownEl = dropdownRef.current;

    dropdownEl.style.position = 'fixed';
    dropdownEl.style.top = `${buttonRect.bottom + 8}px`;
    dropdownEl.style.right = `${window.innerWidth - buttonRect.right}px`;
  }, []);

  const handlePortalMount = useCallback(() => {
    setIsPortalMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && isPortalMounted) {
      const frame = requestAnimationFrame(() => {
        updateDropdownPosition();
      });

      window.addEventListener('resize', updateDropdownPosition);
      window.addEventListener('scroll', updateDropdownPosition);

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', updateDropdownPosition);
        window.removeEventListener('scroll', updateDropdownPosition);
      };
    }

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
      window.removeEventListener('scroll', updateDropdownPosition);
    };
  }, [isOpen, isPortalMounted, updateDropdownPosition]);

  // Reset portal mounted state when menu is closed
  useEffect(() => {
    if (!isOpen) {
      setIsPortalMounted(false);
    }
  }, [isOpen]);

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-4"
        >
          <Image
            src="/avatar.webp"
            width={48}
            height={48}
            alt="Avatar"
            className="rounded-full"
          />
          <p className="h5 text-text-light-01 dark:text-text-dark-03">
            Mitchel
          </p>
        </button>

        {isOpen && (
          <Portal
            onMount={handlePortalMount}
            hasBackdrop
            onBackdropClick={() => setIsOpen(false)}
          >
            <div ref={dropdownRef}>
              <Menu
                items={menuItems}
                menuItemClassName="flex items-center justify-between gap-20"
              />
            </div>
          </Portal>
        )}
      </div>
    </>
  );
};

export default ProfileMenu;
